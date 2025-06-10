import { Link, Route, Routes } from "react-router-dom";
import './App.css';

function Home() {
  const style = {
    backgroundColor : 'skyblue'
  }
  return <div style={style}>
    <h2>Home</h2>
    <p>Home Page...</p>
  </div>
}
function About() {
   const style = {
    backgroundColor : 'pink'
  }
  return <div style={style}>
    <h2>About</h2>
    <p>About Page...</p>
  </div>
}
function Contact() {
   const style = {
    backgroundColor : 'yellow'
  }
  return <div style={style}>
    <h2>Contact</h2>
    <p>Contact Page...</p>
  </div>
}

function App() {
  return (
    <div className="App">
      
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
