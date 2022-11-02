import { useNavigate } from 'react-router-dom'

const Theme = (props) => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate (`/themes/${props.id}`)
  }


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