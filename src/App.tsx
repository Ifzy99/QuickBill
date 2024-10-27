import './App.css'
import FinanceLogger from './components/FinanceLogger'
import { Footer } from './components/Footer'
import { Header } from './components/Header'


function App() {
 

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header/>
      <main className="flex-1 container mx-auto px-4 py-8">
        <FinanceLogger/>
      </main>
      <Footer/>
      </div>
  )
}

export default App
