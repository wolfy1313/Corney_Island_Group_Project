import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className='headerLink'>
          HOME
        </Link>
        <Link to="/themes" className='headerLink'>
          THEMES
        </Link>
        <Link to="/attractions" className='headerLink'>
          ATTRACTIONS
        </Link>
      </nav>
    </header>
  )
}

export default Header