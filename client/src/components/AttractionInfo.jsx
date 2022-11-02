import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AttractionInfo = () => {
  let { attractionId } = useParams()

  const [attractionInfo, setAttractionInfo] = useState(null)

  const getAttractionInfo = async () => {
    const response = await axios.get(`http://localhost:3001/attractions/${attractionId}`)

    setAttractionInfo(response.data.attraction)
  }

  let navigate = useNavigate()

  const deleteAttraction = async () => {
    await axios.delete(`http://localhost:3001/attractions/${attractionId}`)
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
              <div className="attractionTheme" onClick={viewTheme}>

                {attractionInfo.theme.name} 
              </div>
            <div className="attractionDescription">
              <h5>{attractionInfo.description}</h5>
            </div>
            <div className="attractionType">
              {attractionInfo.type}
            </div>
              <div>
                <section className="buttons">
                  <button className="deleteButton" 
                  onClick={deleteAttraction}
                  >
                    delete
                  </button>
                </section>
              </div>
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate(-1)}>
        BACK
      </button>
    </div>
  )
}

export default AttractionInfo
