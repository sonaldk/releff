import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./integrations/supabase/client";
import { Navbar } from "./components/Navbar";
import { TopNav } from "./components/TopNav";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import People from "./pages/People";
import AskAI from "./pages/AskAI";
import Integrations from "./pages/Integrations";
import ClientDetail from "./pages/ClientDetail";
import ContactDetail from "./pages/ContactDetail";
import Deals from "./pages/Deals";
import Auth from "./pages/Auth";
import { useIsMobile } from "./hooks/use-mobile";
import "./App.css";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="min-h-screen">
                <TopNav />
                <div className={`flex ${isMobile ? 'flex-col' : ''} pt-14`}>
                  <Navbar />
                  <div className={`flex-1 ${isMobile ? 'w-full' : ''}`}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/organisation" element={<Organisation />} />
                      <Route path="/people" element={<People />} />
                      <Route path="/ask-ai" element={<AskAI />} />
                      <Route path="/integrations" element={<Integrations />} />
                      <Route path="/deals" element={<Deals />} />
                      <Route path="/client/:id" element={<ClientDetail />} />
                      <Route path="/contact/:id" element={<ContactDetail />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;