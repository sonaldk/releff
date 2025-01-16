import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl animate-fade-in [animation-delay:200ms]">
            Join thousands of businesses already using our platform to grow their relationships and revenue.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 hover:scale-105 transition-transform duration-200 animate-fade-in [animation-delay:400ms]"
              onClick={() => navigate("/auth")}
            >
              Start Free Trial <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};