const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Detail = require('./model/detail');

const MONGODB_URI =
'mongodb+srv://adarshvikram552002:deKSl9XDzVP0xwEb@cluster0.afeuf0c.mongodb.net/test';

const app = express();
const adminRoutes = require('./routes/admin');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',"GET, PUT, POST, DELETE, HEAD, OPTIONS");
    res.setHeader('Access-Control-Allow-Credentials','true')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use(express.static(path.join(__dirname, 'public')));


app.use(adminRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
