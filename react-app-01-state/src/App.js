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
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={ ()=>{        
        setMode('WELCOME')
      } } ></Header>
      <Nav topics={topics} onChangeMode={ (id)=>{
        setMode('READ')
      } }></Nav>
      { content }
    </div>
  );
}

export default App;
