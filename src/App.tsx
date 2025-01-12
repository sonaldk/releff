import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import People from "./pages/People";
import AskAI from "./pages/AskAI";
import Integrations from "./pages/Integrations";
import ClientDetail from "./pages/ClientDetail";
import ContactDetail from "./pages/ContactDetail";
import { useIsMobile } from "./hooks/use-mobile";
import "./App.css";

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <div className={`flex ${isMobile ? 'flex-col' : ''}`}>
        <Navbar />
        <div className={`flex-1 ${isMobile ? 'w-full' : ''}`}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/organisation" element={<Organisation />} />
            <Route path="/people" element={<People />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/client/:id" element={<ClientDetail />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;