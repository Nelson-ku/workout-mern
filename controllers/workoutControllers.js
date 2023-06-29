//this file is used in writing functions to perform operations on the data or the database
const workout=require('../models/workoutsModels')

//function to get all workouts 
 const getWorkouts=async(req,res)=>{
    const workout=await workout.find({}).sort({createdAt:-1})

    res.status(200).json(workout)
 }


//function to get a single workout

//create a new workouk
const createWorkout= async(req,res)=>{
    const {title,reps,load}=req.body
    //utilizing the workout models using try and catch block code
    //add document to db
    try {
        const Workout = await workout.create({title,load,reps})
        res.status(200).json(Workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}


//delete a workout 

//update a workout

//exporting the functions 
module.exports ={
    createWorkout
}

