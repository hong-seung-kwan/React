
// 컴포넌트 함수 생성
// 컴포넌트: 사용자 정의 태그를 반환하는 함수
// 복잡한 코드를 묶을 때 사용
// 컴포넌트 함수 이름은 대문자로 시작
function Header(){
  return (
    <header>
        <h1><a href="/">Web</a></h1>
    </header>
  )

}

function Nav(){
  return <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol> 
}

function Article(){
  return <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
}

function App() {
  return (

    // 페이지 구성: 각페이지로 이동하는 링크, 본문
    <div className="App">

      <Header></Header>
      <Nav></Nav>
      <Article></Article> 
 
      

    </div>
  );
}