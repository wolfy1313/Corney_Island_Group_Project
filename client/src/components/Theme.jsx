const Theme = (props) => {
  return (
    <>
    <div className="themeDiv" onClick={() => props.onClick(props.id)}>
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