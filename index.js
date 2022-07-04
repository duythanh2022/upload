const express  = require('express');
const path    = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRouter = require('./router/product.router')
const url = "mongodb+srv://duythanh:thanh98@cluster0.zxvg6zu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database' + error.message );
  });

const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log(`server connecting ${PORT}`);
  });
app.use("/api",productRouter)
