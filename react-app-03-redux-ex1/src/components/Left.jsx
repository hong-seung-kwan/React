import { useSelector } from "react-redux"


export const Left1 = () => {

  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}

const Left2 = () => {
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}

const Left3 = () => {
  const num = useSelector(state => {
    return state.num
  })

  return (
    <div>
      <h1>Left3 : {num}</h1>
    </div>
  )
}