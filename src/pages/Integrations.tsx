import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  ChevronDown,
  CheckCircle,
  PlusCircle,
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
    id: "hubspot",
    name: "HubSpot",
    description: "Sync your CRM data with HubSpot.",
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
  { 
    id: "crm", 
    name: "CRM Systems", 
    icon: Database,
    integrations: ["hubspot", "salesforce", "zoho"]
  },
  { 
    id: "erp", 
    name: "ERP Solutions", 
    icon: Building2,
    integrations: ["sap", "oracle", "microsoft dynamics"]
  },
  { 
    id: "ecommerce", 
    name: "E-commerce", 
    icon: ShoppingCart,
    integrations: ["shopify", "woocommerce", "magento"]
  },
  { 
    id: "communication", 
    name: "Communication", 
    icon: MessageSquare,
    integrations: ["slack", "teams", "discord"]
  },
  { 
    id: "email", 
    name: "Email Marketing", 
    icon: Mail,
    integrations: ["mailchimp", "sendgrid", "klaviyo"]
  },
];

export default function Integrations() {
  const { toast } = useToast();

  const handleConnect = (integration: string) => {
    toast({
      title: "Integration Request",
      description: `Connecting to ${integration}...`,
    });
  };

  const activeIntegrations = integrations.filter(
    (integration) => integration.connected
  );

  return (
    <div className="container max-w-5xl mx-auto p-8 space-y-8">
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

      {/* Categories Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Integrations</h2>
        <div className="grid gap-4">
          {categories.map((category) => (
            <DropdownMenu key={category.id}>
              <DropdownMenuTrigger asChild>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardHeader className="flex flex-row items-center space-y-0 p-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center justify-between">
                        {category.name}
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {category.integrations.map((integration) => (
                  <DropdownMenuItem
                    key={integration}
                    onClick={() => handleConnect(integration)}
                    className="flex items-center space-x-2"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span className="capitalize">{integration}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>

      {/* Active Integrations Section */}
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
                  <CardTitle className="text-xl flex items-center">
                    {integration.name}
                    <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  </CardTitle>
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
  );
}