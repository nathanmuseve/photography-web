import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
