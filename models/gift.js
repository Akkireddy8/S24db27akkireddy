const mongoose = require('mongoose');

const giftSchema = mongoose.Schema({
  gift_type: String,
  gift_size:  {
    type: String,
    minlength: [2],
    maxlength: [50],
  },

  gift_price:  {
    type: Number,
    min: [0],
    max: [999],
  }
});
module.exports = mongoose.model('gift', giftSchema);