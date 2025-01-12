import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

const AskAI = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement AI query handling
      console.log("Sending query:", query);
    } catch (error) {
      console.error("Error processing AI query:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6">Ask AI Assistant</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            Ask a Question
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Ask anything about the organization or contact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px] mb-4"
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
    </div>
  );
};

export default AskAI;