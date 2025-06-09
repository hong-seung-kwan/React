// json 파일 불러오기
// json 파일 안에 있는 배열을 movies라는 변수에 담기
import { Link, Route, Routes, useParams } from 'react-router-dom';
import movies from './movie.json';
import './App.css';

function Home(){
  return (
    <div>
    <h1>Welcome</h1>
    <p>Welcome...</p>
    </div>
  )
}


// 영화 메뉴 만들기
function Movies(){
  // 링크 자동으로 생성하기

  // 링크를 담을 변수 선언
  let lis = []

  // movies 배열을 사용해서 링크 목록 만들기
  for(let m of movies){
    lis.push(<li key={m.id}><Link to={'/movie/' + m.id}>{m.title}</Link></li>)
  }
  return <div>
    <h1>Movies List</h1>
    <ul>
      {lis}
      {/* {movies.map(m => <li key={m.id}><Link to={'/movie/'+m.id}>{m.title}</Link></li>)} */}
    </ul>
  </div>
}
function Movie(){

  const params = useParams()

  // 영화 정보를 담을 변수 선언
  let movie = null
  // 배열 함수를 사용해서 간단하게 작성
  // movies는 배열. foreach map find 같은 함수를 가지고 있음
  movie = movies.find( m=> m.id === Number(params.movie_id))

  return <div>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <img src={movie.poster} alt='이미지없음'></img>
  </div>
}

function App() {

  return (
    <div className="App">
      {/* home과 movie 링크 추가 */}
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/movies'>Movies</Link> </li>
      </ul>
      {/* 라우터 추가 */}
      {/* URL 경로에 따라 페이지 이동 */}
      {/* path: URL 경로 */}
      {/* element: 컴포넌트 또는 텍스트 */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movie/:movie_id' element={<Movie></Movie>}></Route>
      </Routes>
    </div>
  );
}

export default App;
