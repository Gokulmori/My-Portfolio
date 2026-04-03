import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/shared/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Awards from "./pages/awards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
