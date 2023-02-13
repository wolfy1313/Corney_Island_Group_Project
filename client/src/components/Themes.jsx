import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Theme from '../components/Theme'

const Themes = () => {
  const [themes, setThemes] = useState([])
  const getThemes = async () => {
    const response = await axios.get(`/api/themes`)
    setThemes(response.data.themes)
  }

  useEffect(() => {
    getThemes()
  }, [])


  return (
    <div className='themeGrid'>
      <div className='allThemes'>
        {themes.map((theme) =>(
          <Theme 
            id={theme._id}
            key={theme._id}
            name={theme.name}
            description={theme.description}
            location={theme.location}
            image={theme.image}
            />
        ) )
        }
      </div>
    </div>
  )
}

export default Themes