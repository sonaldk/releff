import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TopNav } from "./components/TopNav";
import Index from "./pages/Index";
import Deals from "./pages/Deals";
import DealDetail from "./pages/DealDetail";
import TaskDetail from "./pages/TaskDetail";
import Organisation from "./pages/Organisation";
import People from "./pages/People";
import ContactDetail from "./pages/ContactDetail";
import ClientDetail from "./pages/ClientDetail";
import AskAI from "./pages/AskAI";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/*"
            element={
              <div className="flex h-screen overflow-hidden">
                <Navbar />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <TopNav />
                  <div className="flex-1 overflow-auto">
                    <Routes>
                      <Route path="/dashboard" element={<Index />} />
                      <Route path="/deals" element={<Deals />} />
                      <Route path="/deals/:id" element={<DealDetail />} />
                      <Route path="/tasks/:id" element={<TaskDetail />} />
                      <Route path="/organisation" element={<Organisation />} />
                      <Route path="/organisation/:id" element={<ClientDetail />} />
                      <Route path="/people" element={<People />} />
                      <Route path="/contact/:id" element={<ContactDetail />} />
                      <Route path="/ask-ai" element={<AskAI />} />
                      <Route path="/integrations" element={<Integrations />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;