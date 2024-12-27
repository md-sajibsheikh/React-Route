import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/component/home"; // Corrected component names
import About from "./assets/component/about"; // Corrected component names
import Services from "./assets/component/services"; // Corrected component names

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
