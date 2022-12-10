import { Routes, Route } from "react-router-dom";
import Home from "./pages/Unauthenticated/Home";
import Contact from "./pages/Unauthenticated/Contact";
import About from "./pages/Unauthenticated/About";
import Dashboard from "./pages/Authenticated/Dashboard";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
