const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { db } = require('../db')

router.get('/', (req, res) => res.send('Corning up Coney'))

router.post('/themes', controllers.createTheme)

router.get('/themes', controllers.getAllThemes)

router.post('/attractions', controllers.createAttraction)

router.get('/attractions', controllers.getAllAttractions)

router.get('/attractions/theme/:id', controllers.findAttractionByTheme)

router.get('/attractions/:id', controllers.getAttractionById)

router.get('/themes/:id', controllers.getThemeById)

router.put('/attractions/:id', controllers.updateAttraction)

router.put('/themes/:id', controllers.updateTheme)

router.delete('/attractions/:id', controllers.deleteAttraction)

router.delete('/themes/:id', controllers.deleteTheme)

module.exports = router
