import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Footer from "./Component/Footer/Footer";
import Faq from "./Component/faq/faq";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Footer />} />
        <Route path="/Service" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
