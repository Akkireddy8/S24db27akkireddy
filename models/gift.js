const mongoose = require('mongoose');

const giftSchema = mongoose.Schema({
  gift_type: String,
  gift_size: String,
  gift_price: Number
});
module.exports = mongoose.model('gift', giftSchema);