require('dotenv').config()
//1-
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')
//2-storing express in app
const app = express();
//7-used inorder to access req.body
app.use(express.json());
//6- middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//4-routes handler
app.use('/api/workouts', workoutRoutes)
//8-connecting to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //3-listen for request
        //5- store separately secrete datas on dotenv
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening to port", process.env.PORT)
        })
   })
   .catch((error) => {
      console.log(error)
   })