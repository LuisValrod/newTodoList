const TodoComputed = ({itemsLeft, clearCompleted, itemsCompleted}) => {
    return(
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{itemsLeft === 0 ? "No Item Left" : `${itemsLeft} Items Left`}
        </span>
        <span className="text-gray-400">{itemsCompleted} completed</span>
        <button onClick={clearCompleted} className="text-gray-400">Clear Completed</button>
    </section>
    )
}

export default TodoComputed