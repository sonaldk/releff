import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface AIResponseProps {
  response: string;
}

export const AIResponse = memo(({ response }: AIResponseProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(response);
      toast.success("Response copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy response");
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Response</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="whitespace-pre-wrap">{response}</div>
      </CardContent>
    </Card>
  );
});

AIResponse.displayName = 'AIResponse';