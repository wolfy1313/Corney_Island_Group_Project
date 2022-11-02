import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Attraction from './Attraction'

const ThemeAttractions = () => {
  const [attractions, setAttractions] = useState([])
  let navigate = useNavigate()
  let { id } = useParams()


  const getThemeAttractions = async () => {
    const response = await axios.get(`http://localhost:3001/attractions/theme/${id}`)
    setAttractions(response.data)
  }

  const viewAttraction = (id) => {
    navigate(`/attractions/${id}`)
  }

  useEffect(() => {
    getThemeAttractions()
  }, [])

  return (
<div className="attractionGrid">
      <div className="allAttractions">
        {attractions
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((attraction) => (
            <Attraction
              id={attraction._id}
              key={attraction._id}
              image={attraction.image}
              name={attraction.name}
              theme={attraction.theme}
              onClick={viewAttraction}
              themeId={id}
            />
          ))}
      </div>
    </div>
  )
}

export default ThemeAttractions