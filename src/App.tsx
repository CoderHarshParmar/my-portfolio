
import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <AnimatedBackground />

      {isLoading ? (
        <Loader onComplete={handleLoadingComplete} />
      ) : (
        <div className="app-content">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/work" element={<Work />} />

            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
