import { useEffect, useState } from 'react'
// import fetch from "fetch"
import './App.css'

function App() {

  const [quote, setQuote] = useState("")
  const url = "https://dummyjson.com/quotes/random"

  const fetchQuote = async () => {
    // SYNTAX- 1
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     setQuote(data.quote)
    //   })

    // SYNTAX-2
     const response = await fetch(url) 
     const data = await response.json()
     setQuote(data.quote)
  }

  useEffect(() => {
    fetchQuote()
  }, [])


  const quoteGenerator = () => {
    fetchQuote()
  }

  return (
    <div className='container'>
      <h1>{quote}</h1>
      <button onClick={quoteGenerator}>Get Quote</button>
    </div>
  )
}

export default App
