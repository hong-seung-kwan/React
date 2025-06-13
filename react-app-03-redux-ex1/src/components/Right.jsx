import { useDispatch } from "react-redux"



export const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

const Right2 = () => {
  return(
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}

const Right3 = () => {

  // redux 스토어에서 dispatch함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value='+' onClick={()=>{
        dispatch({ type: 'PLUS'})
      }}></input>
    </div>
  )
}