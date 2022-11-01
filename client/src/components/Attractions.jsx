import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Attraction from '../components/Attraction'

const ViewAttractions = () => {
  const [attractions, setAttractions] = useState([])

  let navigate = useNavigate()
  let { attractionsId } = useParams()

  const getAttractions = async () => {
    const response = await axios.get(`http://localhost:3001/attractions`)
    setAttractions(response.data.attractions)
    console.log(response.data.attractions)
  }

  const viewAttraction = (id) => {
    navigate(`/attractions/${id}`)
  }

  useEffect(() => {
    getAttractions()
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

export default ViewAttractions