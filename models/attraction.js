const mongoose = require('mongoose')
const Attraction = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    theme: { type: mongoose.Schema.Types.ObjectId, ref: 'Theme' },
    image: { type: String }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Attraction', Attraction)
