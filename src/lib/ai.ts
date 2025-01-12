import { toast } from "sonner";

interface AIRequestOptions {
  message: string;
  context?: {
    contactName?: string;
    organization?: string;
    lastInteraction?: string;
    engagementScore?: string;
    recentMeetings?: Array<{ date: string; subject: string }>;
  };
}

export const generateAIResponse = async (
  apiKey: string,
  { message, context }: AIRequestOptions
): Promise<string> => {
  try {
    const contextString = context
      ? `Context Information:
         Contact: ${context.contactName}
         Organization: ${context.organization}
         Last Interaction: ${context.lastInteraction}
         Engagement Score: ${context.engagementScore}
         ${context.recentMeetings?.length ? `Recent Meetings:
         ${context.recentMeetings.map(m => `${m.date}: ${m.subject}`).join('\n')}` : ''}`
      : '';

    const fullPrompt = `${contextString}\n\nUser Request: ${message}`;

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant that helps users with their business relationships. Be professional, concise, and use the provided context to give relevant answers.'
          },
          {
            role: 'user',
            content: fullPrompt
          }
        ],
        temperature: 0.2,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    toast.error('Failed to generate AI response');
    throw error;
  }
};