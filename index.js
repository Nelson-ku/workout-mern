require('dotenv').config()
const express =require ("express");

//configurations of the routes
const workoutRoutes=require('./routes/workouts')

//create an express app
const app= express();

//creting a middleware to ensure to print or console log out the operations
app.use((req,res, next)=>{
    console.log(req.path,req.method)
    next() 
});


//routes
app.get('/',(req, res)=>{
    res.json({mssg:'This is a new application'})
})

//utilizing the routes defined in the routers configuration folder
app.use('/api/workouts',workoutRoutes)



const mongodb =require('mongodb');

// mongodb.connect(

// )


//listening for requests
app.listen(process.env.PORT ,() =>{
    console.log("server running");
})

process.env 