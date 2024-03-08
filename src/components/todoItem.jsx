import CheckIcon from "./icons/checkIcon"
import CrossIcon from "./icons/crossIcon"


const TodoItem = ({todo}) => {
    const{id, title, completed} = todo
    return(
        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
          {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
          </button> */}
          <button className={`h-5 w-5 rounded-full border-2 flex-none ${completed ? "grid place-content-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500": "inline-block " }`}>
            {completed && <CheckIcon />}
            
          </button>
          <p className="text-gray-60 0 grow">{title}       
          </p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>
    )
}

export default TodoItem