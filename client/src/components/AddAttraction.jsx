import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AddAttraction = () => {
  const navigate = useNavigate()
  const [themes, setThemes]= useState([])
  const [formState, setFormState]= useState({name: '',type: '',description: '',theme: '',image: ''})

  const Themes = () => {
    const getThemes = async () => {
      const response = await axios.get(`http://localhost:3001/themes`)
      setThemes(response.data.themes)
    }
    getThemes()
    }

  const handleChange = (event)=> {
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event)=>{
    event.preventDefault()
    let createdAttrraction = await axios.post('http://localhost:3001/attractions', 
    formState)
    .then((response)=> {
      console.log(response)
      setFormState({name: '',type: '',description: '',theme: '',image: ''})
      navigate('/attractions')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    Themes()
  },[])
  return (
    <div className="attractionForm">
      <h1 className="formTitle">Add Attraction</h1>
    <div className="addAttractionForm">
      <form className='form' onSubmit={handleSubmit}>
      <div className="formDiv">
      <label htmlFor="theme" className="formHeader">Theme:</label>
      <select id = 'theme'onChange={handleChange}>
        <option value={null} defaultValue>PickTheme</option>
        {themes.map((theme)=>(
          <option value={theme._id} key={theme._id}>{theme.name}</option>
        ))}
      </select>
      </div>
      <div className="formDiv">
      <label htmlFor="name" className="formHeader">Name:</label>
      <input onChange={handleChange} type='text' value={formState.name} id='name'></input>
      </div>
      <div className="formDiv">
      <label htmlFor="description" className="formHeader">Description:</label>
      <textarea onChange={handleChange} type='text' value={formState.description} id='description'></textarea>
      </div>
      <div className="formDiv">
      <label htmlFor="type" className="formHeader">Type:</label>
      <input onChange={handleChange} type='text' value={formState.type} id='type'></input>
      </div>
      <div className="formDiv">
      <label htmlFor="image" className="formHeader">Image:</label>
      <input onChange={handleChange} type='text' value={formState.image} id='image'></input>
      </div>
      <div className="buttonDiv">
      <button type='submit' className="submitButton">Submit</button>
      </div>
      </form>
    </div>
    </div>
        
    )
}

export default AddAttraction