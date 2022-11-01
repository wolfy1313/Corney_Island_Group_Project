const mongoose = require('mongoose')
const Theme = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Theme', Theme)
