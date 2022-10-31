const Attraction = require('../models/attraction')
const Theme = require('../models/theme')

const createTheme = async (req, res) => {
  try {
    const theme = await new Theme(req.body)
    await theme.save()
    return res.status(201).json({ theme })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createTheme
}
