import { Link, Route, Routes} from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>환영합니다!</h2>
    </div>
  )
}
function Profile(){
  
  return(
    <div>
      <h3>프로필</h3>
      <p>이름: 홍길동</p>
      <p>나이: 30세</p>
    </div>
  )
}

function Hobby(){
  return(
    <div>
      <h3>취미</h3>
      <p>독서,등산,사진 찍기</p>
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h3>연락처</h3>
      <p>이메일:hong@example.com</p>
      <p>전화:010-1234-5678</p>
    </div>
  )
}
function About() {

  return (
    <div>
      <div>
        <h2>자기소개 페이지</h2>
        
        <Link to='/about/profile'>프로필</Link>
        &nbsp;&nbsp;
        <Link to='/about/hobby'>취미</Link>
        &nbsp;&nbsp;
        <Link to='/about/contact'>연락처</Link>
      </div>

      <Routes>
        <Route path="profile" element={<Profile></Profile>}></Route>
        <Route path="hobby" element={<Hobby></Hobby>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  )
}



function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        &nbsp;&nbsp;
        <Link to='/about'>About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about/*" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
