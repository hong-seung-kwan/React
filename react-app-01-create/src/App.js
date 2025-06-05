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
// 등록화면을 반환하는 컴포넌트 추가
function Create(props){

  console.log(props)
  return <article>
    <h2>Create</h2>
    {/* form 태그 안에서 submit 버튼을 클릭하면 onSubmit 이벤트 발생 */}
    <form onSubmit={ (event) => {
      // 사용자가 입력한 제목과 내용을 꺼내서 topics 배열에 추가

      // 버튼을 클릭했을 때 페이지 이동 막기
      event.preventDefault()
      // console.log(event.target.title.value)
      // console.log(event.target.body.value)

      // props로 전달받은 함수를 호출
      props.onCreate(event.target.title.value,event.target.body.value)
    } }>
      <p>
        <input type="text" name="title" placeholder="title"></input>
      </p>
      <p>
        <input type="text" name="body" placeholder="body"></input>
      </p>
      <p>
        <input type="submit" value='Create'></input>
      </p>
    </form>
  </article>
}

function App() {

  const [mode, setMode] = useState('WELCOME')


  const [id, setId] = useState(null)
  
  let content = null

  // topics를 state로 선언

  const temp = [
    { id:1, title:'html', body:'html is ..' },
    { id:2, title:'css', body:'css is ..' },
    { id:3, title:'javascript', body:'javascript is ..' }
  ]

  const [topics, setTopics] = useState(temp);
  
  const [ nextId, setNextId ] = useState(4)

  // 모드 추가(WELCOME/READ/CREATE)
  // CREATE 모드가 되면 등록화면이 나타남
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  }else if(mode === 'READ'){

    let title = null;
    let body = null;


    for(let t of topics){
      console.log(t.id, id)
      console.log(id, typeof id)


      if(t.id === Number(id)){

        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }else if(mode === 'CREATE'){
    // 본문에 등록화면 넣기
    // 등록을 처리하기 위해
    // onCreate라는 함수를 props에 추가
    // 사용자가 입력한 제목과 내용을 매개변수로 추가
    // 컴포넌트 내부에서 onCreate함수를 호출하여
    // 부모에게 title과 body가 전달됨
    content = <Create onCreate={ (_title, _body) => {
      
      // 사용자가 입력한 제목과 내용을 topics 배열에 추가
      // 새로운 topic 생성
      let newTopic = {id: nextId, title: _title, body: _body }
      // 배열에 새로운 토픽 추가
      topics.push(newTopic)
      // 기존 배열을 새로운 배열로 복사
      // ... => 스프레드 연산자. 배열을 분해
      const newTopics = [...topics];
      setTopics(newTopics)
      // topics는 배열, 배열은 객체
      // state는 값이 바뀌어야 컴포넌트가 다시 실행됨
      // 등록 끝난 후 해당 토픽의 상세페이지로 이동
      setMode('READ')
      // 현재 토픽 아이디 변경
      setId(nextId)
      // nextId를 1만큼 증가
      setNextId(nextId + 1)

    } }></Create>
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

      {/* 등록페이지로 이동하는 링크 */}
      <a href="/create" onClick={ (event)=>{
        // 페이지 이동 막기
        event.preventDefault()
        setMode('CREATE')
      } }>Create</a>

    </div>
  );
}

export default App;
