import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ThemeAttractions from './ThemeAttractions'

const Theme = (props) => {
  const [selectedAttractionByTheme, setSelectedAttractionByTheme] = useState({})
  const {id} = useParams()
  let navigate = useNavigate()

  const handleClick = () => {
    navigate (`/themes/${props.id}`)
  }

  useEffect(() => {
    const getThemeById = async () => {
      const response = await axios.get(`http://localhost:3001/attractions/theme/${props.id}`)
      console.log(response.data)
    }
    getThemeById()
  }, [id])

  return (
    <>
    <div className="themeDiv">
          <div className="themeImgageWrapper">
            <img className="themeImage" src={props.image} alt={props.name}></img>
          </div>
          <div className="themeInfoWrapper">
            <h1 className="themeName" onClick={handleClick}>{props.name}</h1>
          </div>
        </div>
    </>
  )
}

export default Theme