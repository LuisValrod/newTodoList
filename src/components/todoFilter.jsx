const TodoFilter = () => {
    return(
    <section className="container mx-auto mt-8">
        <div className="bg-white rounded-md flex justify-center gap-4 p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
    </section>
    )
}

export default TodoFilter