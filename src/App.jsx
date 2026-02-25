import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomePopup from "./components/WelcomePopup";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Initiatives from "./pages/Initiatives";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WelcomePopup />
                <Home />
                <Programs />
                <Impact />
                <GetInvolved />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/initiatives" element={<Initiatives />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

