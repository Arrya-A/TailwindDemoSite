import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Project from "./pages/Project";
import Landing from "./pages/landing/Landing";

function App() {
  const location = useLocation();

  // Detect if current path is /login or /register
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  // Detect if it's the landing page ("/")
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {!hideHeaderFooter && <Header islanding={isLandingPage} />}

      <Routes>
        <Route path="/" element={<Landing islanding={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
