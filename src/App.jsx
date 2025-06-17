import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Project from "./pages/Project";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const hideHF = ["/login", "/register"].includes(location.pathname);

  return (
    <>
    <ScrollToTop/>
      {!hideHF && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      {!hideHF && <Footer />}
    </>
  );
}

export default App;
