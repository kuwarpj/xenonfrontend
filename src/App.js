import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    
      <Routes>
      <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
          
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
