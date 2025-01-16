import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in [animation-delay:200ms]">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Transform Your Business Relationships
          </h1>
          <p className="text-xl text-gray-600">
            Streamline your customer relationships, track deals, and boost engagement with our intelligent CRM platform.
          </p>
          <div className="pt-4">
            ="lg" 
              className="text-lg px-8 hover:scale-105 transition-transform duration-200"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="hidden lg:block animate-fade-in [animation-delay:400ms]">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person working on laptop"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};