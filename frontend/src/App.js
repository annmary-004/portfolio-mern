import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
        <About />
        <Portfolio />
        <Services />
        <Experience />
         <Contact />
    </div>
  );
}

export default App;