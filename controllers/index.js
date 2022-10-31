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
const createAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body)
    return res.status(201).json({ attraction })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllThemes,
  createTheme,
  createAttraction
}
