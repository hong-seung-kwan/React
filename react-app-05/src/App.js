
// 페이지 이동을 위해 라우터 처리

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./features/Home";
import Register from "./features/Register";
import Login from "./features/Login";
import BoardList from "./features/BoardList";
import BoardDetail from "./features/BoardDetail";
import BoardRegister from "./features/BoardRegister";
import BoardModify from "./features/BoardModify";

function App() {
  return (
    <div className="App">
      {/* 중첩 라우트 */}
      {/* 공통 레이아웃은 Layout을 사용하고 */}
      {/* 하위경로에 따라 콘텐츠를 교체 */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          {/* 게시물 목록/등록/상세/수정 */}
          <Route path="/board/list" element={<BoardList/>}></Route>
          {/* 게시물 등록 화면 추가 */}
          <Route path="/board/register" element={<BoardRegister/>}></Route>
          {/* URL 주소에 파라미터 추가 */}
          {/* /1 /2 /3 모두 같은 화면이 반환 1,2,3은 파라미터로 수집 */}
          <Route path="/board/read/:no" element={<BoardDetail/>}></Route>
          {/* URL 주소에 파라미터 추가 */}
          {/* 예: /board/modify/1 /board/modify/1 => no에 1,2수집 */}
          <Route path="/board/modify/:no" element={<BoardModify/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
