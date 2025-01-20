import { ContactHeader } from "@/components/contact/ContactHeader";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
        <ContactHeader
          name={clientData.organization}
          organization={clientData.name}
          email={clientData.email}
          phone={clientData.phone}
          lastContact={clientData.lastContact}
        />
      </Card>
    </motion.div>
  );
};