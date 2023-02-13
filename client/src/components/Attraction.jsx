const Attraction = (props) => {
  return (
    <>
    <div className="attractionDiv" onClick={() => props.onClick(props.id)}>
          <div className="attractionImgageWrapper">
            <img className="attractionImage" src={props.image} alt={props.name}></img>
          </div>
          <div className="attractionInfoWrapper">
            <h1 className="attractionName">{props.name}</h1>
          </div>
        </div>
    </>
  )
}

export default Attraction