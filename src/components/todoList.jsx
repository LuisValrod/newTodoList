import TodoItem from "./todoItem"


const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
    {todos.map((todo) => <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} updateTodo={updateTodo}/>)}

      </div>

    )
}

export default TodoList