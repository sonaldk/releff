import { ContactHeader } from "@/components/contact/ContactHeader";

interface ClientHeaderProps {
  clientData: {
    organization: string;
    name: string;
    email: string;
    phone: string;
    lastContact: string;
  };
}

export const ClientHeader = ({ clientData }: ClientHeaderProps) => {
  return (
    <ContactHeader
      name={clientData.organization}
      organization={clientData.name}
      email={clientData.email}
      phone={clientData.phone}
      lastContact={clientData.lastContact}
    />
  );
};