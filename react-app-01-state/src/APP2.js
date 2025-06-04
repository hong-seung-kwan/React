import { useState } from "react";

function Header(props){
  return (
    <header>
        <h1><a href="/" onClick={
          (event)=>{
            event.preventDefault()
            props.onChangeMode()
          }
        } > {props.title} </a></h1>
    </header>
  )
}
function Nav(props){
  const lis = [];
for(let t of props.topics){

  lis.push(<li key={t.id}><a id={t.id} href={ "/read" + t.id } 
    onClick={ (event) => {
    event.preventDefault()
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

// 헤더를 클릭하면 웰컴페이지를 표시
// 네비게이션을 클릭하면 상세페이지를 표시

function App() {

  // mode를 state로 변경

  // 모드: welcome/read
  // let mode = 'WELCOME'

  // useState 함수로 state 생성
  // 초기값은 WELCOME

  // usestate의 반환값은 배열
  // 배열 분해
  // 첫번째 요소는 현재상태, 두번째 요소는 상태를 변경하는 함수
  const [mode, setMode] = useState('WELCOME')

  // article(본문)에 넣을 내용
  let content = null

  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  }else if(mode === 'READ'){
    content = <Article title='Welcome' body='Hello, read'></Article>
  }

  const topics = [
    { id:1, title:'html', body:'html is ..' },
    { id:2, title:'css', body:'css is ..' },
    { id:3, title:'javascript', body:'javascript is ..' }
  ]

  // state는 컴포넌트의 상태를 관리하는 값으로,
  // 값이 변경되면 컴포넌트 함수가 다시 호출되면서 UI가 변경됨 

  return (
    <div className="App">
      {/* mode state를 변경 */}
      <Header title="WEB" onChangeMode={ ()=>{        
        // mode = 'WELCOME'
        setMode('WELCOME')
      } } ></Header>
      {/* 네비를 클릭하면 mode가 READ로 변경 */}
      <Nav topics={topics} onChangeMode={ (id)=>{
        // mode = 'READ'
        setMode('READ')
      } }></Nav>
      { content }
    </div>
  );
}

export default App;
// MODE를 변경해도 화면은 그대로
// 왜??
// 리액트에서 화면이 생성되는 시점은?
// app 함수가 실행될 때 ui가 생성되므로 mode 변수의 값을 바꿔도
// 화면에는 영향이 없음