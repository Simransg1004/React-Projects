import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

function App() {
  return(
    <Button></Button>
  )
}

const Button = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  return(
    <button onClick={handleClick}>
      { isLiked ? <FcLike /> : <FcLikePlaceholder/> }
    </button>
  )
}

export default App
