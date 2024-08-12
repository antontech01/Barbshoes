const { timestamps } = require('mongodb')
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  color: {
    type: String,
    required: true
  },
  soleType: {
    type: String,
    required: true
  },
  bodyMaterial: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  // Add additional fields as needed, such as order date, customer ID, etc.
},

{
    timestamps: true,
}

);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
