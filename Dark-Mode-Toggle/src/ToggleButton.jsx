import { useEffect, useState } from "react"
import "./App.css"

const ToggleButton = () => {

    // Function to get the initial mode
    const getMode = () => {
        const theme = localStorage.getItem("theme")
        if(!theme) {
            localStorage.setItem("theme"," dark-theme")
            return dark-theme
        }
        return theme
    }
    const [theme, setTheme] = useState(getMode)

    useEffect(()=>{
        document.body.className = theme
        localStorage.setItem("theme", theme)
    }
    , [theme])

    
    // Function to handle click
    const handleToggleButton = () => {
        if(theme == "dark-theme") {
            setTheme("light-theme")
        }
        else {
            setTheme("dark-theme")
        }
    }
    // {console.log(theme)}

  return (
     <button type="button"
        onClick={handleToggleButton}
     >Toggle Mode</button> 
  )
}

export default ToggleButton