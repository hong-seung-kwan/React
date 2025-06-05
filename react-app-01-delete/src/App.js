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

function Update(props) {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return <article>
    <h2>Update</h2>
    <form onSubmit={(event) => {
      event.preventDefault()
      props.onUpdate(event.target.title.value, event.target.body.value)
    }}>
      <p>
        <input type="text" name="title" placeholder="title" value={title} onChange={(event) => {
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

    // 수정 링크
    contextControll = 
    <>
      <li><a href={"/update" + id} onClick={(event) => {
        event.preventDefault()
        setMode('UPDATE')
      }}>Update</a></li>
      {/* 삭제 버튼 추가 */}
      {/* 삭제 버튼을 클릭하면 해당 토픽이 삭제됨 */}
      <li>
        <input type="button" value='Delete' onClick={ (event)=>{

          // 기존배열에서 선택한 토픽을 제거
          const newTopics = []
          // 기존 배열에서 해당 토픽만 제외하고 옮기기
          for(let t of topics){
            if(t.id !== Number(id)){
              newTopics.push(t)
            }
          }

          // topics state 업데이트
          setTopics(newTopics)
          setMode('WELCOME')

        } }></input>
      </li>

    </>

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

    let title = null;
    let body = null;
    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }

    content = <Update title={title} body={body}
      onUpdate={(_title, _body) => {
        console.log(title, body)
        const newTopic = { id: Number(id), title: _title, body: _body }
        for (let i in topics) {
          if (topics[i].id === Number(id)) {

            console.log(newTopic)
            topics[i] = newTopic;
          }
        }
        console.log(topics)
        const newTopics = [...topics]
        setTopics(newTopics)
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
        {contextControll}
      </ul>
    </div>
  );
}
export default App;
