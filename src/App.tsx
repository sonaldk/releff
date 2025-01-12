import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import ClientDetail from "./pages/ClientDetail";
import People from "./pages/People";
import ContactDetail from "./pages/ContactDetail";
import AskAI from "./pages/AskAI";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/client/:id" element={<ClientDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/ask-ai" element={<AskAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;