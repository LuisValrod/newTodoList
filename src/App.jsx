const App = () => {
  return(
  <>
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
        <button>luna</button>
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
      <div className="bg-white rounded-md px-4">
      <article>
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-600">Complete Online JavaScript curse</p>
        <button>exit</button>
      </article>
      <article>
        <button>circle</button>
        <p>Complete Online JavaScript curse</p>
        <button>exit</button>
      </article>
      <article>
        <button>circle</button>
        <p>Complete Online JavaScript curse</p>
        <button>exit</button>
      </article>
      <section>
        <span>Items left</span>
        <button>Clear Complete</button>
      </section>
      </div>
    </main>

    <section className="container mx-auto px-4">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
    
    
    <p className="text-center">Drag and Drop reorder list</p>
  </div>
 </>
  )
}

export default App
