import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AttractionInfo = () => {
  let { attractionId } = useParams()

  const [attractionInfo, setAttractionInfo] = useState(null)

  const getAttractionInfo = async () => {
    const response = await axios.get(`/api/attractions/${attractionId}`)

    setAttractionInfo(response.data.attraction)
  }

  let navigate = useNavigate()

  const deleteAttraction = async () => {
    await axios.delete(`/api/attractions/${attractionId}`)
    navigate(`/attractions`)
  }


  const viewTheme = () => {
    navigate(`/themes/${attractionInfo.theme._id}`)
  }

  useEffect(() => {
    getAttractionInfo()
  }, [attractionId])


  return (
    <div className="attractionInfo">
      {attractionInfo ? (
        <div className="viewAttractionInfo">
            <img
              className="attractionInfoImage"
              src={attractionInfo.image}
              alt={attractionInfo.name}
            ></img>
              <div>
                <div className="attractionInfoTag">
                  Name
                </div>
                <div className="attractionInfoTag2">
                {attractionInfo.name}
                </div>
              </div>
              <div>
                <div className="attractionInfoTag">
                  Location
                </div>
                <div className="attractionTheme" onClick={viewTheme}>
                {attractionInfo.theme.name} 
                </div>
              </div>
              <div>
              <div className="attractionDescriptionTag">
                  Description
                </div>
            <div className="attractionDescription">
              <h5>{attractionInfo.description}</h5>
            </div>
            </div>
            <div>
            <div className="attractionDescriptionTag">
                  Type
                </div>
            <div className="attractionType">
              {attractionInfo.type}
            </div>
            </div>
            <div className="actionsInfoTag">
                  Actions
                </div>
              <div>
              
                <div className="buttons">
                <section className="button">
                  <button className="deleteButton" 
                  onClick={deleteAttraction}
                  >
                    Delete
                  </button>
                </section>
              </div>  
              <div className="button">
            <button className="backButton" onClick={() => navigate(-1)}>
              Back
            </button>
            </div>
            </div>
        </div>
      ) : null}
      
    </div>
  )
}

export default AttractionInfo
