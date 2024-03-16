import { useState } from "react"
import Header from "./components/header"
import TodoComputed from "./components/todoComputed"
import TodoCreate from "./components/todoCreate"
import TodoFilter from "./components/todoFilter"
import TodoList from "./components/todoList"

 const initialStateTodos = [
  {id: 1, title: 'Complete my own portfolio', completed: true},
  {id: 2, title: 'Complete my own blog', completed: false},
  {id: 3, title: 'Pick up groceries', completed: true},
  {id: 4, title: '10 minutes meditation', completed: false},
  {id: 5, title: 'Analyse the data of "Countries of the world" file', completed: true},

 ]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

 //create Function

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      completed: false,
      title: title.trim()
    }
    setTodos([...todos, newTodo])
  }
// remove Function
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
// Update function
  const updateTodo = (id) => {
    setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }
// Clear all completed todos Function
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

// Logic to filter all, completed and actives todos
  const [filter, setFilter] = useState('all');

  const changeFilterState = (filter) => {
    setFilter(filter)
  }

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todos) => todos.completed);
      default:
        return todos
    }

  }

 let itemsCompleted = todos.filter(todo => todo.completed).length

 let itemsLeft = todos.length
  
  return(
  <>
  <div className="dark:bg-gray-900 transition-all duration-1000 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
  
   <Header />

    <main className="container mx-auto mt-8 px-4">
      
      <TodoCreate createTodo={createTodo} />
       
      <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
       
      <TodoComputed itemsLeft={itemsLeft} clearCompleted={clearCompleted} itemsCompleted={itemsCompleted} />

      <TodoFilter changeFilterState={changeFilterState} filter={filter} />
    
    </main>

    
    <footer><p className="text-center mt-14 dark:text-gray-500">Drag and Drop reorder list</p></footer>
  </div>
 </>
  )
}

export default App
