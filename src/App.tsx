import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { TechStack } from './components/TechStack'
import { Background } from './components/Background'
import { About } from './components/About'
import { Industry } from './components/Industry'
import { HireMe } from './components/modals/HireMe'
import { ModalProvider } from './providers/ModalProvider'

function App() {
  return (
    <>
      <ModalProvider>
        <NavBar className="fixed top-0 z-99"></NavBar>
        <main className="min-w-sm max-w-3xl mx-auto flex flex-col pt-12">
          <Hero />
          <TechStack />
          <Industry />
          <About />
        </main>
        <Footer />
        <HireMe />
        <Background />
      </ModalProvider>
    </>
  )
}

export default App
