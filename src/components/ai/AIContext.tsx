import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";

interface AIContextProps {
  contactName?: string;
  organization?: string;
  lastInteraction?: string;
  engagementScore?: string;
  recentMeetings?: Array<{ date: string; subject: string }>;
}

export const AIContext = memo(({ 
  contactName,
  organization,
  lastInteraction,
  engagementScore,
  recentMeetings
}: AIContextProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Context Information</CardTitle>
        <Info className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-4">
            {contactName && (
              <div>
                <h4 className="font-medium mb-1">Contact</h4>
                <p className="text-sm text-gray-600">{contactName}</p>
              </div>
            )}
            {organization && (
              <div>
                <h4 className="font-medium mb-1">Organization</h4>
                <p className="text-sm text-gray-600">{organization}</p>
              </div>
            )}
            {lastInteraction && (
              <div>
                <h4 className="font-medium mb-1">Last Interaction</h4>
                <p className="text-sm text-gray-600">{lastInteraction}</p>
              </div>
            )}
            {engagementScore && (
              <div>
                <h4 className="font-medium mb-1">Engagement Score</h4>
                <p className="text-sm text-gray-600">{engagementScore}</p>
              </div>
            )}
            {recentMeetings && recentMeetings.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Recent Meetings</h4>
                <div className="space-y-2">
                  {recentMeetings.map((meeting, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      <span className="font-medium">{meeting.date}</span>: {meeting.subject}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
});

AIContext.displayName = 'AIContext';