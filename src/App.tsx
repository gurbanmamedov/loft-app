import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import Apartments from "./components/About/About";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Cards />
      <Apartments />
      <Footer />
    </>
  );
}

export default App;
