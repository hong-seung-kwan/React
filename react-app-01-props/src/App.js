// 매개변수로 props 속성 받기
function Header(props){
  // props는 읽기만 가능
  // 컴포넌트 내부에서 수정 불가
  // props.title = "WEB"

  return (
    <header>
        <h1><a href="/"> {props.title} </a></h1>
    </header>
  )

}

function Nav(props){
  // topics 배열을 사용해서 목록을 생성

  // 먼저 기존 코드를 변수에 대입
  const lis = [];

  // topics 배열을 사용해서 li 태그를 하나씩 생성
  // 동적으로 만든 태그에는 식별자가 있어야함
for(let t of props.topics){
  // 주소: /read/1 /read/2 /read/3
  lis.push(<li key={t.id}><a href={ "/read" + t.id } > {t.title} </a></li>)
}
console.log(lis)
  return <ol> { lis } </ol>
}

function Article(props){
  
  return <article>
        <h2>{ props.title }</h2>
        { props.body }
      </article>
}

function App() {

  // 컴포넌트 속성(props)는 컴포넌트 내부에서 수정 불가
  // props는 부모에서 추가할 것
  // nav에 들어가는 링크 목록을 생성
  const topics = [
    { id:1, title:'html', body:'html is ..' },
    { id:2, title:'css', body:'css is ..' },
    { id:3, title:'javascript', body:'javascript is ..' }
  ]
  return (

    <div className="App">
      {/* Header 컴포넌트에서 title이라는 속성을 추가 */}
      <Header title="React"></Header>
      {/* Nav 컴포넌트에 props 추가 */}
      <Nav topics={topics} ></Nav>
      <Article title='Welcome' body='Hello, Web'></Article>
      <Article title='Hi' body='Hello, React'></Article>
    </div>
  );
}
export default App;