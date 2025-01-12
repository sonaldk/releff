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
  Database,
  Building2,
  ShoppingCart,
  Mail,
  MessageSquare,
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  connected: boolean;
  category: string;
}

const integrations: Integration[] = [
  {
    id: "github",
    name: "GitHub",
    description: "Connect your GitHub repositories for seamless code integration.",
    icon: Github,
    connected: true,
    category: "Development",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get notifications and updates directly in your Slack workspace.",
    icon: Slack,
    connected: true,
    category: "Communication",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Sync your CRM data with Salesforce.",
    icon: Database,
    connected: false,
    category: "CRM",
  },
  {
    id: "sap",
    name: "SAP",
    description: "Connect your ERP system with SAP.",
    icon: Building2,
    connected: false,
    category: "ERP",
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "Integrate your e-commerce platform.",
    icon: ShoppingCart,
    connected: false,
    category: "E-commerce",
  },
];

const categories = [
  { id: "crm", name: "CRM Systems", icon: Database },
  { id: "erp", name: "ERP Solutions", icon: Building2 },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  { id: "communication", name: "Communication", icon: MessageSquare },
  { id: "email", name: "Email Marketing", icon: Mail },
];

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const activeIntegrations = integrations.filter(
    (integration) => integration.connected
  );

  const handleConnect = (integration: Integration) => {
    toast({
      title: `${integration.name} Integration`,
      description: `Successfully connected to ${integration.name}`,
    });
  };

  return (
    <div className="container max-w-7xl mx-auto p-8 space-y-8">
      {/* Overview Section */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-none">
        <CardHeader>
          <CardTitle className="text-3xl">Integrations Overview</CardTitle>
          <CardDescription className="text-lg">
            Connect and manage your essential business tools and services. 
            Streamline your workflow by integrating with your favorite platforms.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Categories Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Integration Categories</h2>
          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
                <CardHeader className="flex flex-row items-center space-y-0 p-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Integrations Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Active Integrations</h2>
          <div className="grid gap-4">
            {activeIntegrations.map((integration) => (
              <Card key={integration.id}>
                <CardHeader className="flex flex-row items-center space-y-0 p-4">
                  <div className="p-2 bg-green-500/10 rounded-lg mr-4">
                    <integration.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{integration.name}</CardTitle>
                    <CardDescription>{integration.category}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
            {activeIntegrations.length === 0 && (
              <Card className="border-dashed">
                <CardHeader className="text-center p-6">
                  <CardDescription>No active integrations yet</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}