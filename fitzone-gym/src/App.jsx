import "./App.css";

import Programs from "./components/Programs/Programs";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Trainers from "./components/Trainers/Trainers";
import Pricing from "./components/Pricing/Pricing";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers/>
      <Pricing/>
    </>
  );
}

export default App;