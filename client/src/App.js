import './App.css'
import Header from './components/Header'
import Attractions from './components/Attractions'
import Themes from './components/Themes'

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
