const Order = require('../models/order.model'); // Import the Order model



//create the order
const createOrder = async (req, res) => {
  try {
    const { name, size, quantity, color, soleType, bodyMaterial, paymentMethod } = req.body;
    const newOrder = new Order({
      name,
      size,
      quantity,
      color,
      soleType,
      bodyMaterial,
      paymentMethod
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create this order' });
  }
};

//get all orders sent to database
const getOrders = async (req, res) => {
  try{
    const orders = await Order.find({})
    res.status(200).json(orders)

  }catch(error){
    res.status(500).json({error: 'failed to get orders'})
  }
}

//get orders by shoe type and total quantity
const getShoes = async (req, res) => {
  try{
    const { name } = req.params
    const shoeType = await Order.find({name})
    const total = shoeType.reduce((acc, shoe) => acc + shoe.quantity, 0)
    res.status(200).json({shoeType, total})

  }catch(error){
    res.status(500).json({error: 'failed to get orders'})
  }
}

//get show

module.exports = { createOrder, getOrders, getShoes };
