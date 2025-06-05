import { useState } from "react";

function App() {

  let [num1,setNum1] = useState('');
  let [num2,setNum2] = useState('');
  let [result, setResult] = useState(null);

  function number1(event){
    if(num1 === ''){
      setNum1(event.target.value)
    }
    console.log('num1: ',num1)
  }
  function number2(event){
    if(num1 !== ''){
      setNum2(event.target.value)
    }
  }
  function add(){
    setResult(num1 + num2)
  }
  function subtraction(){
    setResult(num1 - num2)
  }
  function multiple(){
    setResult(num1 * num2)
  }
  function division(){    
    setResult(num1 / num2)
  }
  function reset(){
    setResult(null)
  }

  return (
    <div className="App">
      <p>식:{num1}{num2}</p>
      <p>결과: {result}</p>
      <input type="button" value='1' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='2' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='3' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='4' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='5' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='6' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='7' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='8' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='9' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <input type="button" value='0' onClick={(event)=>{
        number1(event);
        number2(event);
      }}></input>
      <br></br>
      <input type="button" value='+' onClick={add}></input>
      <input type="button" value='-' onClick={subtraction}></input>
      <input type="button" value='*' onClick={multiple}></input>
      <input type="button" value='/' onClick={division}></input>
      <br></br>
      <input type="button" value='=' onClick={result}></input>
      <input type="button" value='C' onClick={reset}></input>
    </div>
  );
}

export default App;
