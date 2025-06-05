import { useState } from "react";

function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={
        (event) => {
          event.preventDefault()
          props.onChangeMode()
        }
      } > {props.title} </a></h1>
    </header>
  )
}
function Nav(props) {
  const lis = [];
  for (let t of props.topics) {

    lis.push(<li key={t.id}><a id={t.id} href={"/read" + t.id}
      onClick={(event) => {
        event.preventDefault()
        // 엘리먼트의 속성인 id을 꺼내서 string값으로 반환됨
        props.onChangeMode(event.target.id)
      }
      }> {t.title} </a></li>)
  }
  return <ol> {lis} </ol>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Create(props) {

  console.log(props)
  return <article>
    <h2>Create</h2>

    <form onSubmit={(event) => {

      event.preventDefault()

      props.onCreate(event.target.title.value, event.target.body.value)
    }}>
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

// 수정화면을 반환하는 컴포넌트 추가
// 외부에서 전달받은 props 받기
function Update(props) {

  // props는 수정 불가
  // props는 부모 컴포넌트에서 전달받은 데이터라서 자식 컴포넌트에서 수정X

  // title과 body를 state로 생성
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)

  return <article>
    <h2>Update</h2>
    <form onSubmit={(event) => {
      event.preventDefault()
      // 부모한테 전달받은 함수 호출
      props.onUpdate(event.target.title.value, event.target.body.value)
    }}>
      <p>
        {/* 입력필드에 이벤트 추가 */}
        <input type="text" name="title" placeholder="title" value={title} onChange={(event) => {
          // title은 state. state는 set함수로 수정
          setTitle(event.target.value)

        }}></input>
      </p>
      <p>
        <input type="text" name="body" placeholder="body" value=
          {body} onChange={(event) => {
            setBody(event.target.value)
          }}></input>
      </p>
      <p>
        <input type="submit" value='Update'></input>
      </p>
    </form>



  </article>
}


function App() {

  const [mode, setMode] = useState('WELCOME')


  const [id, setId] = useState(null)

  let content = null



  const temp = [
    { id: 1, title: 'html', body: 'html is ..' },
    { id: 2, title: 'css', body: 'css is ..' },
    { id: 3, title: 'javascript', body: 'javascript is ..' }
  ]

  const [topics, setTopics] = useState(temp);

  const [nextId, setNextId] = useState(4)

  // 상세조회 모드일때만 수정링크를 표시
  let contextControll = null


  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  } else if (mode === 'READ') {

    let title = null;
    let body = null;



    for (let t of topics) {



      if (t.id === Number(id)) {

        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>

    // 상세 조회 모드일때 contextControl에 링크 담기
    contextControll = <li><a href={"/update" + id} onClick={(event) => {
      event.preventDefault()
      // 모드를 update로 전환
      setMode('UPDATE')
    }}>Update</a></li>

  } else if (mode === 'CREATE') {

    content = <Create onCreate={(_title, _body) => {

      let newTopic = { id: nextId, title: _title, body: _body }

      topics.push(newTopic)

      const newTopics = [...topics];
      setTopics(newTopics)

      setMode('READ')

      setId(nextId)

      setNextId(nextId + 1)

    }}></Create>
  } else if (mode === 'UPDATE') {
    // 모드가 UPDATE라면 본문에 수정화면 표시
    // props로 topic 정보를 전달
    // console.log('현재 아이디: ', id)
    // topics 배열에서 현재 토픽 정보 찾기

    let title = null;
    let body = null;

    for (let t of topics) {
      // 토픽의 아이디와 현재 아이디 비교
      // console.log(t.id, typeof t.id)
      // console.log(id, typeof id)
      if (t.id === Number(id)) {
        // console.log(t)
        title = t.title;
        body = t.body;
      }
    }

    // props로 topic 정보 전달
    // props: 컴포넌트 속성. 부모 -> 자식 데이터 전달할때 사용

    // 사용자가 변경한 내용을 topics 배열에 업데이트
    // props로 onUpdate함수를 전달
    content = <Update title={title} body={body}
      onUpdate={(_title, _body) => {
        console.log(title, body)

        // 토픽 새로 만들기
        // id의 타입을 변환: string -> number
        const newTopic = { id: Number(id), title: _title, body: _body }

        // topics 배열에서 기존 토픽 업데이트
        // for of: 배열의 요소를 하나씩 꺼냄
        // for in: 배열의 인덱스를 꺼냄
        for(let i in topics){ // i : 0,1,2
          if(topics[i].id === Number(id)){
            // 배열의 요소를 교체
            console.log(newTopic)
            topics[i] = newTopic;
          }
        }

        console.log(topics)

        // 배열을 복사해서 새로운 배열로 생성
        const newTopics = [...topics]

        // topics state 업데이트
        setTopics(newTopics)
        // 수정이 끝났으면 상세조회 모드로 변경
        setMode('READ')
        
      }
    }></Update>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME')
      }} ></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ')
        setId(id)
      }}></Nav>
      {content}

      <ul>
        <li>
          <a href="/create" onClick={(event) => {
            event.preventDefault()
            setMode('CREATE')
          }}>Create</a>
        </li>
        {/* 'READ' 모드면 수정 링크 나타남 */}
        {contextControll}
      </ul>



    </div>
  );
}

export default App;
