import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Attractions from './components/Attractions'
import Themes from './components/Themes'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
