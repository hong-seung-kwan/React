import { useState } from "react";
import styled from "styled-components";
import './App.css';

const VanilaButton = styled.button`
  background-color: lightyellow;
  
`
const ChocoButton = styled.button`
  background-color: peru;
  
`
const StrawButton = styled.button`
  background-color: pink;
  
`

function App() {

  let [ice, setIce] = useState("아직 선택되지 않았어요")

  function result(e){
    setIce("선택한 아이스크림:" + (e.target.value))
  }
  
  return (
    <div className="App">
      <h2>아이스크림을 골라보세요</h2>
      <VanilaButton value='바닐라' onClick={result}>바닐라</VanilaButton>
      <ChocoButton value='초코' onClick={result}>초코</ChocoButton>
      <StrawButton value='딸기' onClick={result}>딸기</StrawButton>
      <div>
        <p>{ice}</p>
      </div>
    </div>
  );
}

export default App;
