import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import CommunityGuide from "./pages/CommunityGuide";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Github from "./pages/Github";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="hero-top body-graphics">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community-guidelines" element={<CommunityGuide />} />
            <Route path="/programs" element={<Programs/>} />
            <Route path="/programs/:id" element={<CourseDetails />} />
            <Route path="/genieverse" element={<Github />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
 