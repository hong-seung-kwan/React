import { NavLink, Route, Routes, useParams } from "react-router-dom";
import movies from './movie.json';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      Welcome...
    </div>
  );
}
function Movie(){

  const params = useParams()

  let movie = null

  movie = movies.find( m=> m.id === Number(params.movie_id))
  
  return(
    <div>
      <p>{movie.description}</p>
      <img src={movie.poster} alt="이미지없음"></img>
    </div>
  )
}
function Movies(){
  return(
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map(item => (<li key={item.id}><NavLink to={'/movie/'+item.id}>{item.title}</NavLink></li>))}
      </ul>
    </div>  
  )
}
function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movie/:movie_id" element={<Movie></Movie>}></Route>
      </Routes>
    </div>
  );
}
export default App;
