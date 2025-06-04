
function Home(){
  return <div>home</div>
}
function About(){
  return <div>about</div>
}
function Contact(){
  return <div>contact</div>
}

function Navbar(){
  return (
  <div> 
  <Home></Home>
  <About></About>
  <Contact></Contact>
  </div>
  )
}

function App() {
  return (

    // 페이지 구성: 각페이지로 이동하는 링크, 본문
    <div className="App">

      <h1>Navigation</h1>
      <Navbar></Navbar>
 
    </div>
  );
}
export default App;
