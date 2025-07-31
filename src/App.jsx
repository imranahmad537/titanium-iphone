import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Highlights from "./Components/Highlights"
import Model from "./Components/Model"

function App() {
 

  return (
    <>
     <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
     </main>
    </>
  )
}

export default App
