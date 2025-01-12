import { memo } from "react";
import { ArrowLeft, Building2, Mail, Phone, Calendar, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ContactHeaderProps {
  name: string;
  organization: string;
  email: string;
  phone: string;
  lastContact: string;
}

export const ContactHeader = memo(({ name, organization, email, phone, lastContact }: ContactHeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to People
        </button>
        <button
          onClick={() => navigate("/people")}
          className="text-gray-600 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <Card className="mb-8 glass-effect">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-gray-500" />
              <span>{organization}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>Last Contact: {lastContact}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
});

ContactHeader.displayName = 'ContactHeader';