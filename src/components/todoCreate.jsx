import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
       if(!title.trim()){
        return setTitle('')
       }
       createTodo(title)
       setTitle('')

    }


    return(
        <form 
        onSubmit={handleSubmit} 
        className="dark:bg-gray-800 transition-all duration-1000 bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center px-4">
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input 
          className="dark:bg-gray-800 transition-all duration-1000 dark:text-gray-300 w-full text-gray-400 outline-none" 
          type='text' 
          placeholder="Create a new todo ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </form>
    )
}


export default TodoCreate