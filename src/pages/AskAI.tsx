import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { AIContext } from "@/components/ai/AIContext";
import { aiTemplates } from "@/data/aiTemplates";
import { toast } from "sonner";

const AskAI = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contextData, setContextData] = useState<any>(null);

  useEffect(() => {
    // In a real implementation, this would fetch data from your backend
    // For now, we'll use mock data if we're on a contact route
    if (id) {
      const mockContactData = {
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
      setContextData(mockContactData);
    }
  }, [id]);

  const handleTemplateSelect = (prompt: string) => {
    // Enhance the prompt with context if available
    if (contextData) {
      const contextPrompt = `Context:\nContact: ${contextData.contactName}\nOrganization: ${contextData.organization}\nLast Interaction: ${contextData.lastInteraction}\nEngagement Score: ${contextData.engagementScore}\n\nRequest:\n${prompt}`;
      setQuery(contextPrompt);
    } else {
      setQuery(prompt);
    }
  };

  const handleSubmit = async () => {
    if (!query.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement AI query handling with your chosen provider
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AITemplates templates={aiTemplates} onSelect={handleTemplateSelect} />
          
          <Card className="mt-8">
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
          {contextData && <AIContext {...contextData} />}
        </div>
      </div>
    </div>
  );
};

export default AskAI;