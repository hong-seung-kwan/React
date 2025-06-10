import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from "./component/Menu";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
