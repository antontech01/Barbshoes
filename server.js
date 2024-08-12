
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/route');
require('dotenv').config();
const port = process.env.PORT || 5000;
const URL = process.env.MONGOD_CONNECT_URI

const app = express();

// Connect to MongoDB (replace with your connection string)
mongoose.connect(URL,{})
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    })
  })
  .catch(err => console.error(err))


// Middleware
app.use(express.json());

// Routes
app.use('/api', orderRoutes);



