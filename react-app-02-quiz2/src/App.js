import { Link, Route, Routes, useParams } from "react-router-dom";


function Home() {
  return (
    <div>
      <h2>커피 주문 앱입니다.</h2>  
    </div>
  );
}
function Menu() {

  return(
    <div>
      <ul>
        {menus.map(item => (<li key={item.id}><Link to={'/coffee/'+item.id}>{item.name}</Link></li>))}
      </ul>
    </div>
  )
}
function Coffee(){
  const params = useParams()

  let coffee = null
  
  coffee = menus.find(c => c.id === params.coffee_id)
  console.log(coffee)
  return(
    <div>
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
    </div>
  )
}

let menus = [
    {"id":"americano","name":"아메리카노", "description": "진하고 깔끔한 에스프레소 커피입니다.",    
    },
    {"id":"latte","name":"라떼", "description": "우유가 부드럽게 섞인 커피입니다."},
    {"id":"cappuccino","name":"카푸치노", "description": "거품이 풍성하고 진한 커피입니다."}
  ]
function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        &nbsp;&nbsp;
        <Link to='/menu'>menu</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="menu" element={<Menu></Menu>}></Route>
        <Route path="coffee/:coffee_id" element={<Coffee></Coffee>}></Route>
      </Routes>
    </div>
  );
}

export default App;
