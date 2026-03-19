import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Optional: Preload images or assets here if needed
  useEffect(() => {
    // You can add logic to check if the main image is already cached
    // For now, we just rely on the SplashScreen timer.
  }, []);

  return (
    <div className="app-container">
      {showSplash ? (
        // 1. Show the Splash Screen
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // 2. Show the Main Content with a fade-in
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
