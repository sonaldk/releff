import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Paperclip } from "lucide-react";

interface Email {
  date: string;
  subject: string;
  from: string;
  hasAttachment: boolean;
}

interface RecentEmailsProps {
  emails: Email[];
}

const EmailItem = memo(({ email }: { email: Email }) => (
  <div className="border-b last:border-0 pb-4 last:pb-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{email.subject}</p>
        <p className="text-sm text-gray-500">From: {email.from}</p>
      </div>
      <div className="flex items-center gap-2">
        {email.hasAttachment && <Paperclip className="h-4 w-4 text-gray-400" />}
        <span className="text-sm text-gray-500">{email.date}</span>
      </div>
    </div>
  </div>
));

EmailItem.displayName = 'EmailItem';

export const RecentEmails = memo(({ emails }: RecentEmailsProps) => {
  return (
    <Card className="glass-effect">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Communications</CardTitle>
        <Mail className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emails.map((email, index) => (
            <EmailItem key={`${email.subject}-${email.date}-${index}`} email={email} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

RecentEmails.displayName = 'RecentEmails';