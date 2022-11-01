import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Attractions from './components/Attractions'
import AttractionInfo from './components/AttractionInfo'
import Themes from './components/Themes'
import Home from './components/Home'
import Theme from './components/Theme'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/themes/:id" element={<Theme />} />
          <Route
            path="/attractions/:attractionId"
            element={<AttractionInfo />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
