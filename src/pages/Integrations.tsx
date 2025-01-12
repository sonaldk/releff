import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Github,
  Slack,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  connected: boolean;
}

const integrations: Integration[] = [
  {
    id: "github",
    name: "GitHub",
    description: "Connect your GitHub repositories for seamless code integration.",
    icon: Github,
    connected: false,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get notifications and updates directly in your Slack workspace.",
    icon: Slack,
    connected: false,
  },
  {
    id: "twitter",
    name: "Twitter",
    description: "Share updates and engage with your audience on Twitter.",
    icon: Twitter,
    connected: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect with your professional network and share updates.",
    icon: Linkedin,
    connected: false,
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Share updates and connect with your audience on Facebook.",
    icon: Facebook,
    connected: false,
  },
];

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConnect = (integration: Integration) => {
    toast({
      title: `${integration.name} Integration`,
      description: `Successfully connected to ${integration.name}`,
    });
  };

  return (
    <div className="container max-w-6xl mx-auto p-8 space-y-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-semibold">Integrations</h1>
          <p className="text-muted-foreground mt-1">
            Connect your favorite tools and services
          </p>
        </div>
        <Input
          type="search"
          placeholder="Search integrations..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <integration.icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>{integration.description}</CardDescription>
              <Button
                className="w-full"
                variant={integration.connected ? "outline" : "default"}
                onClick={() => handleConnect(integration)}
              >
                {integration.connected ? "Disconnect" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}