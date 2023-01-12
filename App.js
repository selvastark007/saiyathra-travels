import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home/> */}
          <Routes>
            {/* <Route path="/"  element={<Navbar/>}/> */}
            <Route path="/"  element={<Home/>}/>
            {/* <Route path="/"  element={<Main/>}/> */}
            <Route  path="/details" element={<Details/>}/>
            {/* <Route path="/" element={<Footer/>}/> */}
          </Routes>
          {/* <Main/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
