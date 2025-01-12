import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import People from "./pages/People";
import AskAI from "./pages/AskAI";
import Integrations from "./pages/Integrations";
import ContactDetail from "./pages/ContactDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/organisation" element={<Organisation />} />
            <Route path="/people" element={<People />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;