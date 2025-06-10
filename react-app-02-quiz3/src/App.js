import { Link, Route, Routes} from "react-router-dom";
import './App.css';

function Home() {
  
  return(
    <div>
      <h2>환영합니다</h2>
    </div>
  )
}

// 중첩 라우트를 사용하는 이유
// 전체 레이아웃은 About 컴포넌트를 쓰고
// 컨텐츠만 교체하기 위해서

function About(){
  
  return(
    <div>
      <h2>자기소개 페이지</h2>
      {/* 하위 메뉴 추가 */}
      <nav>
        <Link to='/about/profile'>프로필</Link>
        <Link to='/about/hobby'>취미</Link>
        <Link to='/about/contact'>연락처</Link>
      </nav>
      {/* about 하위 경로 처리 */}
      <Routes>
        <Route path="/profile" element={'Profile..'}></Route>
        <Route path="/hobby" element={'Hobby..'}></Route>
        <Route path="/contact" element={'Contact..'}></Route>
      </Routes>
    </div>
  )
}

// 링크: a태그 또는 Link컴포넌트
// a태그: 새로운 request발생 -> index.html 다시 로드 -> 모든 컴포넌트 호출
// Link컴포넌트: 특정 컴포넌트 함수만 호출 (예:Home/About)
function App() {
  
  return (
    <div className="App">
      {/* 1. 링크를 클릭하면 url 주소가 '/about'으로 변경됨 */}
      <nav>
        {/* 링크 - a태그 또는 LINK 컴포넌트 */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      {/* path: url 경로 */}
      {/* element: url 바뀌었을 때, 보여줄 화면 */}
      {/* 2. url 주소가 변경되면, 이를 감지하여 */}
      {/* 매치되는 route를 찾고 element를 이자리에 반환 */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* /about/profile /about/hobby /about/contact */}
        {/* /about과 관련된 url을 처리 */}
        {/* /about으로 시작되는 url 들어오면 <about>컴포넌트 반환 */}
        <Route path='/about/*' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
