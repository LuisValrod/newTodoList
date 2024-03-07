import Header from "./components/header"
import TodoComputed from "./components/todoComputed"
import TodoCreate from "./components/todoCreate"
import TodoFilter from "./components/todoFilter"
import TodoList from "./components/todoList"

const App = () => {
  
  return(
  <>
  <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
  
   <Header />

    <main className="container mx-auto mt-8 px-4">
      
      <TodoCreate />
       
      <TodoList />
       
      <TodoComputed />

      <TodoFilter />
    
    </main>

    
    <footer><p className="text-center mt-8">Drag and Drop reorder list</p></footer>
  </div>
 </>
  )
}

export default App
