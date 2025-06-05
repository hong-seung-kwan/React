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

function App() {

  const [mode, setMode] = useState('WELCOME')

  // 토픽의 아이디를 state로 생성
  // usestate는 배열을 반환하는데,
  // 첫번째 요소는 현재 상태, 두번째 요소는 state를 수정하는 함수
  // state: 컴포넌트의 생명주기를 관리하는 훅
  // state가 변경되면 해당 컴포넌트 함수가 다시 실행됨
  // 따라서 state가 변경될 때, 화면이 바뀜
  const [id, setId] = useState(null)
  
  let content = null

  const topics = [
    { id:1, title:'html', body:'html is ..' },
    { id:2, title:'css', body:'css is ..' },
    { id:3, title:'javascript', body:'javascript is ..' }
  ]

  // mode가 WELCOME이면 메인 페이지
  // mode가 READ면 상세 페이지
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  }else if(mode === 'READ'){

    let title = null;
    let body = null;

    // topics 배열에서 현재 아이디에 맞는 데이터 찾기
    for(let t of topics){
      console.log(t.id, id)
      console.log(id, typeof id)

      // topic의 아이디와 현재 아이디를 비교
      if(t.id === Number(id)){
        // topic을 찾았으면, topic의 title과 body 꺼내기
        title = t.title;
        body = t.body;
      }
    }

    // 선택한 topic의 정보를 본문에 출력
    content = <Article title={title} body={body}></Article>
  }
  
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={ ()=>{        
        setMode('WELCOME')
      } } ></Header>
      <Nav topics={topics} onChangeMode={ (id)=>{
        setMode('READ')
        setId(id)
      } }></Nav>
      { content }
    </div>
  );
}

export default App;
