import "./App.css";

import Programs from "./components/Programs/Programs";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
    </>
  );
}

export default App;