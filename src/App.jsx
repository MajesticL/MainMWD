import { lazy, Suspense } from "react"; 
const About = lazy(() => import("./components/About")); 
const Projects = lazy(() => import("./components/Projects")); 
const Services = lazy(() => import("./components/Contact"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Contact"));


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;