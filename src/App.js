import { Routes, Route } from "react-router-dom";
import Home from "./pages/Unauthenticated/Home";
import Contact from "./pages/Unauthenticated/Contact";
import About from "./pages/Unauthenticated/About";
import Dashboard from "./pages/Authenticated/Dashboard";
import Create from "./pages/Unauthenticated/Create";
import Login from "./pages/Unauthenticated/Login";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cruise" element={<Create />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
