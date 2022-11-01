import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className='headerLink'>
          Home
        </Link>
        <Link to="/themes" className='headerLink'>
          Themes
        </Link>
        <Link to="/attractions" className='headerLink'>
          Attractions
        </Link>
      </nav>
    </header>
  )
}

export default Header