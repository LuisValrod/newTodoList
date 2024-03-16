const TodoFilter = ({changeFilterState, filter}) => {
    return(
    <section className="container mx-auto mt-8">
        <div className="dark:bg-gray-800 transition-all duration-1000 bg-white rounded-md flex justify-center gap-4 p-4">
          <button className={`${filter === 'all' ? "text-blue-600" : "dark:text-gray-500  text-gray-400 hover:text-blue-600"  }`} onClick={() => changeFilterState('all')}>All</button>
          <button className={`${filter === 'active' ? "text-blue-600" : "dark:text-gray-500 text-gray-400 hover:text-blue-600"  }`} onClick={() => changeFilterState('active')}>Active</button>
          <button className={`${filter === 'completed' ? "text-blue-600" : "dark:text-gray-500 text-gray-400 hover:text-blue-600"  }`} onClick={() => changeFilterState('completed')}>Completed</button>
        </div>
    </section>
    )
}

export default TodoFilter