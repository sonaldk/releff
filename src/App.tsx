import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Organisation from "./pages/Organisation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/organisation" element={<Organisation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;