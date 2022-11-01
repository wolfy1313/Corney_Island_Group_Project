import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Attractions from './components/Attractions'
import AttractionInfo from './components/AttractionInfo'
import Themes from './components/Themes'
import Home from './components/Home'
import ThemeAttractions from './components/ThemeAttractions'
import AddAttraction from './components/AddAttraction'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/themes/:id" element={<ThemeAttractions />} />
          <Route
            path="/attractions/:attractionId"
            element={<AttractionInfo />}
          />
          <Route path="/create-attraction" element={<AddAttraction />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
