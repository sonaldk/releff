import { FileText, PresentationIcon, ScrollText, FileCheck, MessageSquare, FileSpreadsheet } from "lucide-react";

export const aiTemplates = [
  {
    title: "Create Proposal",
    description: "Generate a proposal document based on previous conversations and requirements",
    icon: FileText,
    prompt: "Create a detailed proposal document for the client based on our previous conversations and requirements. Include project scope, timeline, and pricing structure."
  },
  {
    title: "Product Demo Script",
    description: "Generate a personalized product demonstration script",
    icon: PresentationIcon,
    prompt: "Create a product demonstration script tailored to the client's industry and needs, highlighting key features and benefits that align with their requirements."
  },
  {
    title: "Contract Draft",
    description: "Generate a contract draft based on agreed terms",
    icon: ScrollText,
    prompt: "Create a draft contract incorporating our standard terms and any specific requirements discussed with the client."
  },
  {
    title: "Meeting Summary",
    description: "Generate a summary of recent meetings and action items",
    icon: FileCheck,
    prompt: "Provide a comprehensive summary of recent meetings with the client, including key discussion points and action items."
  },
  {
    title: "Engagement Analysis",
    description: "Analyze client engagement patterns and suggest improvements",
    icon: FileSpreadsheet,
    prompt: "Analyze the client's engagement history and provide insights on communication patterns, meeting frequency, and suggestions for improvement."
  },
  {
    title: "Custom Question",
    description: "Ask any specific question about the organization or contact",
    icon: MessageSquare,
    prompt: ""
  }
];