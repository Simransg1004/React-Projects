import { useState } from "react"



function App() {
  return (
    <>
      <Button></Button>
    </>
  )
}


const Button = () => {
  
  const handleClick = () => {
    setCount(count+1)
  }

  const [count, setCount] = useState(0)
  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

export default App
