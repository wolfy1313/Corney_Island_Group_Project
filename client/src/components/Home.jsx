import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <img className="homeName" src="https://i.imgur.com/5GTSYfE.png"></img>
      <div className="homeLinks">
        <div className="selectDiv">
        <h2 className="selectScenario">Select Scenario</h2>
        </div>
        <div className="themesAttractions">
        <div className="themesAttractions2">
      <div className="homeLink">
        <div className="homeDiv">
          <Link to="/themes" className="homeImage">
            <h2 className="homeHeader">Themes</h2>
          </Link>
        </div>
      </div>
      <div className="homeLink">
        <div className="homeDiv">
          <Link to="/attractions" className="homeImage">
            <h2 className="homeHeader">Attractions</h2>
          </Link>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home