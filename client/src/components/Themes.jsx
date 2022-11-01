import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Theme from '../components/Theme'

const Themes = () => {
  const [themes, setThemes] = useState([])

  let navigate = useNavigate()
  let { themeId } = useParams()

  const getThemes = async () => {
    const response = await axios.get(`http://localhost:3001/themes`)
    setThemes(response.data.themes)
    console.log(response.data.themes)
  }

  const viewTheme = (id) => {
    navigate(`/themes/${id}`)
  }

  useEffect(() => {
    getThemes()
  }, [themeId])


  return (
    <div className='themeGrid'>
      <div className='allThemes'>
        {themes.map((theme) =>(
          <Theme 
            id={theme.id}
            key={theme.key}
            name={theme.name}
            description={theme.description}
            location={theme.location}
            image={theme.image}
            onClick={viewTheme}
            />
        ) )
        }
      </div>
    </div>
  )
}

export default Themes