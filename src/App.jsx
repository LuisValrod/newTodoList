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

 
  
  return(
  <>
  <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
  
   <Header />

    <main className="container mx-auto mt-8 px-4">
      
      <TodoCreate createTodo={createTodo} />
       
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
       
      <TodoComputed />

      <TodoFilter />
    
    </main>

    
    <footer><p className="text-center mt-8">Drag and Drop reorder list</p></footer>
  </div>
 </>
  )
}

export default App
