const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Coffee shop', 'Bookstore'],
  }
},
{ 
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;