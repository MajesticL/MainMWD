import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const aboutImg = new Image();
    aboutImg.src = "/images/RGMajestiic.png";

    const projectImgs = [
      "/images/bakery.avif",
      "/images/todo.avif",
      "/images/paws.avif",
    ];

    projectImgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="app-container">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="main-content content-fade-in">
          <Navbar />
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;
