import CrossIcon from "./components/icons/crossIcon"
import MoonIcon from "./components/icons/moonIcon"
const App = () => {
  let color = 'rgb(250, 250, 250)'
  return(
  <>
  <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
        <button>
          <MoonIcon color={color} />
        </button>
      </div>
      <form className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center px-4 mt-8 ">
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input 
          className="w-full text-gray-400 outline-none" 
          type='text' 
          placeholder="Create a new todo ..."/>
      </form>
    </header>

    <main className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-md [&>article]:p-4">
        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
          <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">Complete Online JavaScript curse
          </p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
          <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">Complete Online JavaScript curse
          </p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
          <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">Complete Online JavaScript curse
          </p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>
      
      
      <section className="py-4 px-4 flex justify-between">
        <span className="text-gray-400">Items left</span>
        <button className="text-gray-400">Clear Complete</button>
      </section>
      </div>
    </main>

    <section className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-md flex justify-center gap-4 p-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
    
    
    <p className="text-center mt-8">Drag and Drop reorder list</p>
  </div>
 </>
  )
}

export default App
