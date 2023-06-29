const mongoose = require('mongoose')


//creating a schema 
const Schema =mongoose.Schema

//defining database tables/shemas and defining their attributes

const workoutSchema= new Schema({
    title: {
        type:String,
        required:true
       },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true})//the timestamps provides the time the file was created and when it was updated

module.exports =mongoose.model('Workout',workoutSchema)



