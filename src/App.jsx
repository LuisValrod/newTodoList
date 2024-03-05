const App = () => {
  return(
  <>
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover">
    <header className="container mx-auto px-4">
      <h1 className="uppercase">Todo</h1>
      <button>luna</button>
      <form>
        <input type='text' placeholder="Create a new todo ..."/>
      </form>
    </header>
    <main className="container mx-auto px-4">
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
      <article>
        <button>circle</button>
        <p>Complete Online JavaScript curse</p>
        <button>exit</button>
      </article>
    </main>
  </div>
 </>
  )
}

export default App
