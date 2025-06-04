// WEB을 클릭하면 경고창이 나오게 이벤트 처리
// props를 통해 onChange라는 함수가 전달됨
function Header(props){

  // a 링크는 클릭하면 다른 페이지도 이동함
  return (
    <header>
        <h1><a href="/" onClick={
          (event)=>{
            // 다른 페이지로 이동하는 기본 동작을 방지
            event.preventDefault()
            // WEB 링크를 클릭하면 경고창이 나타남
            props.onChangeMode()
          }
        } > {props.title} </a></h1>
    </header>
  )

}

// 네비게이션 클릭하면 해당 토픽의 아이디가 나오게 처리
function Nav(props){
  console.log(props)


  const lis = [];
for(let t of props.topics){
  // a 태그에 id 추가
  // 링크에 onclick 이벤트 추가
  lis.push(<li key={t.id}><a id={t.id} href={ "/read" + t.id } 
    onClick={ (event) => {
    console.log(event.target, event.target.id)
    event.preventDefault()
    // 토픽의 아이디를 인자로 입력
    props.onChangeMode(event.target.id)
  } 
}> {t.title} </a></li>)
}
  return <ol> { lis } </ol>
}

function Article(props){
  return <article>
        <h2>{ props.title }</h2>
        { props.body }
      </article>
}

function App() {
  const topics = [
    { id:1, title:'html', body:'html is ..' },
    { id:2, title:'css', body:'css is ..' },
    { id:3, title:'javascript', body:'javascript is ..' }
  ]

  // 내비 목록을 클릭하면 해당 아이디가 나오도록 이벤트를 처리

  return (
    <div className="App">
      {/* 헤더를 클릭하면 경고창이 나오는 이벤트 처리 */}
      <Header title="WEB" onChangeMode={ ()=>{
        alert('Header')
      } } ></Header>
      {/* Nav 컴포넌트에 onChangeMode라는 props를 추가 */}
      <Nav topics={topics} onChangeMode={ (id)=>{
        alert(id)
      } }></Nav>
      <Article title='Welcome' body='Hello, WEB'></Article>
    </div>
  );
}

export default App;