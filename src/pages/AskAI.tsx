import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { AIContext } from "@/components/ai/AIContext";
import { aiTemplates } from "@/data/aiTemplates";
import { generateAIResponse } from "@/lib/ai";
import { toast } from "sonner";

const AskAI = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  // Mock data - in a real app, this would come from your backend
  const contextData = {
    contactName: "John Smith",
    organization: "Tech Corp",
    lastInteraction: "2024-02-15",
    engagementScore: "High (85%)",
    recentMeetings: [
      { date: "2024-02-15", subject: "Q2 Planning Discussion" },
      { date: "2024-02-01", subject: "Product Review Meeting" },
      { date: "2024-01-15", subject: "Initial Consultation" },
    ],
  };

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
        context: contextData,
      });
      setResponse(aiResponse);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 space-y-8 bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Ask AI Assistant</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <AITemplates templates={aiTemplates} onSelect={handleTemplateSelect} />
          
          <Card>
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
        </div>

        <div className="lg:col-span-1">
          <AIContext {...contextData} />
        </div>
      </div>
    </div>
  );
};

export default AskAI;