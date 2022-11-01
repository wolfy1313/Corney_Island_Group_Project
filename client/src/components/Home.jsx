import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <img className="homeName" src="https://i.imgur.com/5GTSYfE.png"></img>
      <div className="homeLink">
        <div className="homeDiv">
          <Link to="/themes" className="homeImage">
            <img src=""></img>
            <h2>Themes</h2>
          </Link>
        </div>
      </div>
      <div className="homeLink">
        <div className="homeDiv">
          <Link to="/attractions" className="homeImage">
            <img src=""></img>
            <h2>Attractions</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home