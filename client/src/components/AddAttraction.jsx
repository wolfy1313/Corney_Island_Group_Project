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
    <div>
      <h1>Add Attraction</h1>
    <div className="addAttractionForm">
      <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="theme">theme</label>
      <select id = 'theme'onChange={handleChange}>
        <option value={null} defaultValue>PickTheme</option>
        {themes.map((theme)=>(
          <option value={theme._id} key={theme._id}>{theme.name}</option>
        ))}
      </select>
      <label htmlFor="name">Name:</label>
      <input onChange={handleChange} type='text' value={formState.name} id='name'></input>
      <label htmlFor="description">Description:</label>
      <input onChange={handleChange} type='text' value={formState.description} id='description'></input>
      <label htmlFor="type">Type:</label>
      <input onChange={handleChange} type='text' value={formState.type} id='type'></input>
      <label htmlFor="image">Image:</label>
      <input onChange={handleChange} type='text' value={formState.image} id='image'></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
        
    )
}

export default AddAttraction