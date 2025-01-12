import { memo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <Accordion type="single" collapsible className="w-full">
      {templates.map((template, index) => {
        const Icon = template.icon;
        return (
          <AccordionItem key={`${template.title}-${index}`} value={`item-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <span>{template.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">{template.description}</p>
                <button 
                  onClick={() => onSelect(template.prompt)}
                  className="text-sm text-primary hover:underline focus:outline-none"
                >
                  Use this template
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
});

AITemplates.displayName = 'AITemplates';