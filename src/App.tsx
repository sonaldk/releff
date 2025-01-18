import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { TopNav } from "./components/TopNav";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import People from "./pages/People";
import AskAI from "./pages/AskAI";
import Integrations from "./pages/Integrations";
import ClientDetail from "./pages/ClientDetail";
import ContactDetail from "./pages/ContactDetail";
import DealDetail from "./pages/DealDetail";
import Deals from "./pages/Deals";
import Auth from "./pages/Auth";
import { useIsMobile } from "./hooks/use-mobile";
import "./App.css";

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard/*"
          element={
            <div className="min-h-screen">
              <TopNav />
              <div className={`flex ${isMobile ? 'flex-col' : ''} pt-14`}>
                <Navbar />
                <div className={`flex-1 ${isMobile ? 'w-full' : ''}`}>
                  <Routes>
                    <Route index element={<Index />} />
                    <Route path="organisation" element={<Organisation />} />
                    <Route path="people" element={<People />} />
                    <Route path="deals" element={<Deals />} />
                    <Route path="ask-ai" element={<AskAI />} />
                    <Route path="integrations" element={<Integrations />} />
                    <Route path="deal/:id" element={<DealDetail />} />
                    <Route path="client/:id" element={<ClientDetail />} />
                    <Route path="contact/:id" element={<ContactDetail />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;