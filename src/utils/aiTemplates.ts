import { FileText, PresentationIcon, ScrollText, MessageSquare, FileSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Template {
  title: string;
  description: string;
  icon: LucideIcon;
  prompt: string;
}

export const getTemplatesForContact = (contactData: any): Template[] => [
  {
    title: "Create Proposal",
    description: "Generate a proposal document based on past conversations and requirements",
    icon: FileText,
    prompt: `Create a detailed proposal document for ${contactData.name} from ${contactData.organization}, considering:
    - Their role as ${contactData.role}
    - Recent engagement score: ${contactData.engagementScore}
    - Last meeting on ${contactData.lastMeeting}
    - Previous interactions and sentiment: ${contactData.sentiment}
    Please format it as a professional business proposal.`
  },
  {
    title: "Meeting Summary",
    description: "Generate a summary of recent meetings and interactions",
    icon: MessageSquare,
    prompt: `Create a comprehensive summary of interactions with ${contactData.name} including:
    - Key points from the last meeting on ${contactData.lastMeeting}
    - Notable communications from recent emails
    - Current engagement level: ${contactData.engagementScore}
    - Action items and follow-ups`
  },
  {
    title: "Product Demo Script",
    description: "Generate a personalized product demonstration script",
    icon: PresentationIcon,
    prompt: `Create a personalized product demo script for ${contactData.name} that:
    - Addresses their role as ${contactData.role} at ${contactData.organization}
    - Considers their influence level: ${contactData.influence}
    - Incorporates their engagement history and preferences
    - Focuses on relevant use cases for their industry`
  },
  {
    title: "Contract Draft",
    description: "Generate a contract draft based on discussed terms",
    icon: ScrollText,
    prompt: `Create a contract draft for ${contactData.name} from ${contactData.organization} that:
    - Reflects their role and decision-making capacity
    - Incorporates standard terms and conditions
    - Includes specific requirements discussed in recent meetings
    - Considers their engagement level: ${contactData.engagementScore}`
  },
  {
    title: "Contact Analysis",
    description: "Generate an in-depth analysis of the contact's engagement and history",
    icon: FileSearch,
    prompt: `Provide a detailed analysis of ${contactData.name} including:
    - Engagement trends and patterns
    - Communication preferences
    - Sentiment analysis: ${contactData.sentiment}
    - Influence level: ${contactData.influence}
    - Recommendations for improving engagement`
  }
];

export const getTemplatesForOrganization = (orgData: any): Template[] => [
  // Similar templates for organization context
  // Will implement when needed
  []
];