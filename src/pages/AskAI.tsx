import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AITemplates } from "@/components/ai/AITemplates";
import { AIResponse } from "@/components/ai/AIResponse";
import { FileText, PresentationIcon, ScrollText } from "lucide-react";

const AskAI = () => {
  const { type, id } = useParams(); // type can be 'organisation' or 'contact'
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const templates = [
    {
      title: "Create Proposal",
      description: "Generate a proposal document based on past conversations and requirements",
      icon: FileText,
      prompt: "Create a detailed proposal document for the client based on our previous conversations and requirements."
    },
    {
      title: "Product Demo Script",
      description: "Generate a personalized product demonstration script",
      icon: PresentationIcon,
      prompt: "Create a product demo script tailored to the client's industry and needs."
    },
    {
      title: "Contract Draft",
      description: "Generate a contract draft based on discussed terms",
      icon: ScrollText,
      prompt: "Create a contract draft incorporating the terms and conditions we've discussed."
    }
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement AI query handling
      console.log("Sending query:", query);
      // Simulated response for now
      setTimeout(() => {
        setResponse("This is a simulated AI response. Integration with an AI service needs to be implemented.");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error processing AI query:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6">Ask AI Assistant</h1>
      
      <div className="grid gap-6">
        <AITemplates templates={templates} onSelect={(prompt) => setQuery(prompt)} />
        
        <Card>
          <CardHeader>
            <CardTitle>Custom Query</CardTitle>
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

        {response && <AIResponse response={response} />}
      </div>
    </div>
  );
};

export default AskAI;