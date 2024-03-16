import TodoItem from "./todoItem"


const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
    {todos.map((todo) => <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} updateTodo={updateTodo}/>)}

      </div>

    )
}

export default TodoList