import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Template {
  title: string;
  description: string;
  icon: LucideIcon;
  prompt: string;
}

interface AITemplatesProps {
  templates: Template[];
  onSelect: (prompt: string) => void;
}

export const AITemplates = memo(({ templates, onSelect }: AITemplatesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template, index) => {
        const Icon = template.icon;
        return (
          <Card key={`${template.title}-${index}`} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {template.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => onSelect(template.prompt)}
              >
                Use Template
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
});

AITemplates.displayName = 'AITemplates';