import { useEffect, useState } from "react"
import MoonIcon from "./icons/moonIcon"
import SunIcon from "./icons/sunIcon"

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'; 
const Header = () => {
  
  const [darkMode, setDarkMode] = useState(initialStateDarkMode)


  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  
     let color = 'rgb(250, 250, 250)'
    return( <header className="container mx-auto px-4 pt-8">
     <div className="flex justify-between">
       <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
       <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon color={color} />}
         
       </button>
     </div>
   </header>)
}


export default Header