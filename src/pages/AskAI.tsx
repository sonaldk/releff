import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { aiTemplates } from "@/data/aiTemplates";
import { toast } from "sonner";

const AskAI = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTemplateSelect = (prompt: string) => {
    setQuery(prompt);
  };

  const handleSubmit = async () => {
    if (!query.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement AI query handling
      console.log("Sending query:", query);
      // Temporary mock response
      setTimeout(() => {
        setResponse("This is a mock AI response. The actual AI integration will be implemented when connected to a backend service.");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error processing AI query:", error);
      toast.error("Failed to process your request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 space-y-8 bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Ask AI Assistant</h1>
      </div>

      <AITemplates templates={aiTemplates} onSelect={handleTemplateSelect} />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            Ask a Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Ask anything about the organization or contact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px]"
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
  );
};

export default AskAI;