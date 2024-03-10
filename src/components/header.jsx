import { useEffect, useState } from "react"
import MoonIcon from "./icons/moonIcon"
import SunIcon from "./icons/sunIcon"


const Header = () => {
  
  const [darkMode, setDarkMode] = useState(false)


  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
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