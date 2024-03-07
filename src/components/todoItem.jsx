import CheckIcon from "./icons/checkIcon"
import CrossIcon from "./icons/crossIcon"


const TodoItem = ({todo}) => {
    const{id, title, completed} = todo
    return(
        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
          <button className="grid h-5 w-5 flex-none place-content-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to pink-500">
            <CheckIcon />
          </button>
          <p className="text-gray-600 grow">{title}       
          </p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>
    )
}

export default TodoItem