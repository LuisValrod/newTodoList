import { useState } from "react"
import Header from "./components/header"
import TodoComputed from "./components/todoComputed"
import TodoCreate from "./components/todoCreate"
import TodoFilter from "./components/todoFilter"
import TodoList from "./components/todoList"

 const initialStateTodos = [
  {id: 1, title: 'Complete my own portfolio', completed: false},
  {id: 2, title: 'Complete my own blog', completed: false},
  {id: 3, title: 'Pick up groceries', completed: true},
  {id: 4, title: '10 minutes meditation', completed: true},
  {id: 5, title: 'Analyse the data of "Countries of the world" file', completed: false},

 ]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  function createTodo (title) {
    const newTodo = {
      id: todos.length + 1,
      completed: false,
      title: title.trim()
    }
    setTodos([...todos, newTodo])
  }
  
  return(
  <>
  <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
  
   <Header />

    <main className="container mx-auto mt-8 px-4">
      
      <TodoCreate createTodo={createTodo} />
       
      <TodoList todos={todos} />
       
      <TodoComputed />

      <TodoFilter />
    
    </main>

    
    <footer><p className="text-center mt-8">Drag and Drop reorder list</p></footer>
  </div>
 </>
  )
}

export default App
