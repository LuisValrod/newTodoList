const TodoComputed = ({itemsLeft, clearCompleted, itemsCompleted}) => {
    return(
    <section className="dark:bg-gray-800 py-4 transition-all duration-1000 px-4 flex justify-between bg-white rounded-b-md">
        <span className="dark:text-gray-500 text-gray-400">{itemsLeft === 0 ? "No Item Left" : `${itemsLeft} Items Left`}
        </span>
        <span className="dark:text-gray-500 text-gray-400">{itemsCompleted} completed</span>
        <button onClick={clearCompleted} className="dark:text-gray-500 text-gray-400">Clear Completed</button>
    </section>
    )
}

export default TodoComputed