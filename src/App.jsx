import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <About />
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </Suspense>
    </>
  );
}

export default App;
