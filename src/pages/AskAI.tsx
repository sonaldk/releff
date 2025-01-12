import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { aiTemplates } from "@/data/aiTemplates";
import { generateAIResponse } from "@/lib/ai";
import { toast } from "sonner";

const AskAI = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const handleTemplateSelect = (prompt: string) => {
    setQuery(prompt);
  };

  const handleSubmit = async () => {
    if (!query.trim()) {
      toast.error("Please enter a question");
      return;
    }

    if (!apiKey) {
      toast.error("Please enter your Perplexity API key");
      return;
    }

    setIsLoading(true);
    try {
      const aiResponse = await generateAIResponse(apiKey, {
        message: query,
      });
      setResponse(aiResponse);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Ask AI Assistant</h1>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            Ask a Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium">
              Perplexity API Key
            </label>
            <input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your Perplexity API key"
            />
          </div>
          <Textarea
            placeholder="Ask anything about the organization or contact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[200px]"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={!query.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? "Processing..." : "Ask AI"}
          </Button>
        </CardContent>
      </Card>

      {response && <AIResponse response={response} />}

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-6">Quick Templates</h2>
        <AITemplates templates={aiTemplates} onSelect={handleTemplateSelect} />
      </div>
    </div>
  );
};

export default AskAI;