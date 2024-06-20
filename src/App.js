import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
// import Contacts from "./components/Contacts";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Photo from "./components/Photo";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Blogs /> */}
      {/* <Contacts /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Photo /> */}
    </div>
  );
}

export default App;
