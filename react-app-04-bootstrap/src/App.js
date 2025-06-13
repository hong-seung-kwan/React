
// 페이지 이동을 위해 라우터 처리

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      {/* 중첩 라우트 */}
      {/* 공통 레이아웃은 Layout을 사용하고 */}
      {/* 하위경로에 따라 콘텐츠를 교체 */}
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={'Home..'}></Route>
          <Route path="/register" element={'Register..'}></Route>
          <Route path="/login" element={'Login..'}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
