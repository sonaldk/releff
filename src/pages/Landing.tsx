import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { SocialProof } from "@/components/landing/SocialProof";
import { CTA } from "@/components/landing/CTA";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary animate-fade-in">Releff</h2>
        </div>
      </header>

      <Hero />
      <Features />
      <SocialProof />
      <CTA />

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-bold text-primary animate-fade-in">Releff</h2>
            <p className="text-gray-600 animate-fade-in [animation-delay:200ms]">
              © 2024 Releff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;