//IMPORTS
const express =require ("express");
//importing mongoose
const mongoose =require('mongoose');
require('dotenv').config()

const cors =require('cors')



//configurations of the routes
const workoutRoutes=require('./routes/workouts')

//create an express app
const app= express();

app.use(cors());

//middleware
app.use(express.json())

//creting a middleware to ensure to print or console log out the operations
app.use((req,res, next)=>{
    console.log(req.path,req.method)
    next() //to continue to the next function
});


//routes within the application not recommended since it creates a jumbled up code so we create a routes folder for handling that.

app.get('/',(req, res)=>{
    res.json({mssg:'This is a new application'})
})

//utilizing the routes defined in the routers configuration folder
app.use('/api/workouts',workoutRoutes)

const PORT = process.env.PORT || 5000
//connecting to the database
mongoose.connect(process.env.MONG_URI)
//Listening to the requests once connected to the database
.then(()=>{
    console.log("Db connected successfully .....");
    //listening for requests
    app.listen(PORT ,() =>{
   console.log(`server running at port ${PORT}`);
})
})
.catch((error)=>{
    console.log(error)
})




