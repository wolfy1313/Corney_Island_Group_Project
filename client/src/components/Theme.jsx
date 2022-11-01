import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Theme = (props) => {
  const [selectedAttractionByTheme, setSelectedAttractionByTheme] = useState({})
  const {id} = useParams()
  let navigate = useNavigate()

  const handleClick = () => {
    navigate (`http://localhost:3001/themes/${props.id}`)
  }

  useEffect(() => {
    const getThemeById = async () => {
      const response = await axios.get(`http://localhost:3001/attractions/theme/${props.id}`)
      setSelectedAttractionByTheme(response.data)
    }
    getThemeById()
  }, [id])

  return (
    <>
    <div className="themeDiv" onClick={handleClick}>
          <div className="themeImgageWrapper">
            <img className="themeImage" src={props.image} alt={props.name}></img>
          </div>
          <div className="themeInfoWrapper">
            <h1>{props.name}</h1>
          </div>
        </div>
    </>
  )
}

export default Theme