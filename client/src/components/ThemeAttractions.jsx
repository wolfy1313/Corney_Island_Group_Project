import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../components/Attraction'

const ThemeAttractions = () => {
  const [attractions, setAttractions] = useState([])

  let navigate = useNavigate()
  let { attractionsId } = useParams()
  // let { themeId } = useParams()

  const getThemeAttractions = async () => {
    const response = await axios.get(`http://localhost:3001/attractions/`)
    setAttractions(response.data.attractions)
  }

  const viewAttraction = (id) => {
    navigate(`/attractions/${id}`)
  }

  useEffect(() => {
    getThemeAttractions()
  }, [attractionsId])

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
            />
          ))}
      </div>
    </div>
  )
}

export default ThemeAttractions