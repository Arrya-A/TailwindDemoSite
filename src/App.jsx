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
import Cursor from "./components/Cursor";
import PNF from "./components/PNF";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./pages/products/productDetails/ProductDetails";
import Products from "./pages/products/Products";
import Dummy from "./components/Dummy";

function App() {
  const location = useLocation();
  //useLocation --> It returns an object that contains info about the current URL

  const hideHF = ["/login", "/register"].includes(location.pathname);
  //location.pathname -->  Gives the current URL path (like /login, /dashboard, etc.) from useLocation() in react-router-dom.

  const hideCursor = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!hideCursor && <Cursor />}
      <ScrollToTop />
      {!hideHF && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
        
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<PNF />} />
      </Routes>
      {!hideHF && <Footer />}
    </>
  );
}

export default App;
