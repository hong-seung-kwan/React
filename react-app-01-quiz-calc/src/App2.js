import { useState } from "react";

function App() {


  let [num, setNum] = useState({ num1: "", num2: "" });
  let [oper, setOper] = useState('');
  let [result, setResult] = useState(null);


  function number(e) {


    if (oper === '') {
      setNum(prev => ({ ...prev, num1:prev.num1+e.target.value }) )
    } else if(oper !== '') {
      setNum(prev => ({ ...prev, num2: prev.num2+e.target.value }))
    }

  }
  function calc() {
    switch (oper) {
      case '+':
        setResult(Number(num.num1) + Number(num.num2))
        break;

      case '-':
        setResult(Number(num.num1) - Number(num.num2))
        break;

      case '*':
        setResult(Number(num.num1) * Number(num.num2))
        break;

      case '/':
        setResult(Number(num.num1) / Number(num.num2))
        break;
      default:

        break;
    }
  }


  
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const formula = ["+", "-", "*", "/"]
  return (
    <div className="App">
      <p>식: {num.num1}{oper}{num.num2}</p>
      <p>결과: {result}</p>

      {numArray.map((item => <input type="button" value={item} onClick={(e) => number(e)} />))}
      <br />
      {formula.map((item => <input type="button" value={item} onClick={(e) => { setOper(e.target.value) }} />))}
      <br />
      <input type="button" value='=' onClick={calc} />
      <input type="button" value='c' onClick={() => {
        setResult('') 
        setNum({num1:'' , num2:''})
        setOper('')
        }}/>

    </div>
  );
}

export default App;
