const Attraction = require('../models/attraction')
const Theme = require('../models/theme')

const getAllThemes = async (req, res) => {
  try {
    const themes = await Theme.find()
    return res.status(200).json({ themes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createTheme = async (req, res) => {
  try {
    const theme = await new Theme(req.body)
    await theme.save()
    return res.status(201).json({ theme })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getThemeById = async (req, res) => {
  try {
    const { id } = req.params
    const theme = await Theme.findById(id)
    if (theme) {
      return res.status(200).json({ theme })
    }
    return res.status(404).send('The theme does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateTheme = async (req, res) => {
  try {
    const theme = await Theme.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(theme)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteTheme = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Theme.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Theme deleted')
    }
    throw new Error('Theme not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body)
    return res.status(201).json({ attraction })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find().populate('theme')
    return res.status(200).json({ attractions })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findAttractionByTheme = async (req, res) => {
  try {
    const { id } = req.params
    const attractionByTheme = await Attraction.find({ theme: id })
    return res.status(200).json(attractionByTheme)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAttractionById = async (req, res) => {
  try {
    const { id } = req.params
    const attraction = await Attraction.findById(id).populate('theme')
    if (attraction) {
      return res.status(200).json({ attraction })
    }
    return res.status(404).send('The attraction does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(attraction)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteAttraction = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Attraction.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Attraction deleted')
    }
    throw new Error('Attraction not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllThemes,
  createTheme,
  createAttraction,
  getAllAttractions,
  getThemeById,
  getAttractionById,
  updateTheme,
  updateAttraction,
  deleteTheme,
  deleteAttraction,
  findAttractionByTheme
}
