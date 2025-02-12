import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      <NavBar className="fixed top-0 right-0 origin-bottom-right -rotate-90 z-50" />
      <Hero />

      <Footer />
    </>
  )
}

export default App
