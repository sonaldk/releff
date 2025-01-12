import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { getTemplatesForContact, getTemplatesForOrganization } from "@/utils/aiTemplates";
import { mockContactData } from "./ContactDetail"; // We'll use the mock data for now

const AskAI = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [apiKey, setApiKey] = useState(localStorage.getItem("perplexity_api_key") || "");

  const data = type === "contact" ? mockContactData[id as keyof typeof mockContactData] : null;
  const templates = type === "contact" 
    ? getTemplatesForContact(data)
    : getTemplatesForOrganization(data);

  useEffect(() => {
    if (!data) {
      toast.error("Invalid data source");
      navigate("/");
    }
  }, [data, navigate]);

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    localStorage.setItem("perplexity_api_key", key);
    toast.success("API key saved");
  };

  const handleSubmit = async () => {
    if (!apiKey) {
      toast.error("Please enter your Perplexity API key");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [
            {
              role: "system",
              content: `You are a helpful AI assistant analyzing ${type} data. 
              Use the following context for your responses:
              ${JSON.stringify(data, null, 2)}`
            },
            {
              role: "user",
              content: query
            }
          ],
          temperature: 0.2,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate response");
      }

      const result = await response.json();
      setResponse(result.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate response. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!data) return null;

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Ask AI Assistant</h1>
        
        {!apiKey && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Perplexity API Key</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <input
                  type="password"
                  className="flex-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your Perplexity API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <Button onClick={() => handleApiKeySubmit(apiKey)}>Save Key</Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="grid gap-6">
          <AITemplates templates={templates} onSelect={(prompt) => setQuery(prompt)} />
          
          <Card>
            <CardHeader>
              <CardTitle>Custom Query</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Ask anything about the contact..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-h-[100px] mb-4"
              />
              <Button 
                onClick={handleSubmit} 
                disabled={!query.trim() || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Ask AI"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && <AIResponse response={response} />}
        </div>
      </div>
    </div>
  );
};

export default AskAI;