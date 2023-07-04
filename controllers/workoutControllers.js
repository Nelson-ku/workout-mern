//this file is used in writing functions to perform operations on the data or the database
const WorkoutModel=require('../models/workoutsModels')
const mongoose=require('mongoose')

//function to get all workouts 
 const getWorkouts=async(req,res)=>{
    const workout=await WorkoutModel.find({}).sort({createdAt:-1})

    res.status(200).json(workout)
 }


 //function to get a single workout
 const getWorkout=async (req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workout"})

    }

    const workout =await WorkoutModel.findById(id)

    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
 }

 //deleting a workout 

 const deleteWorkout= async(req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const workout= await WorkoutModel.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(404).json({error:'the workout doesnt exist'})
    }
    res.status(200).json(workout)
 }



//create a new workouk
const createWorkout= async(req,res)=>{
    console.log('Creating workout')
    const {title,reps,load}=req.body

    let emptyFields=[]

    if (!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }

    if (emptyFields.length>0){
        return res.status(400).json({error:'Please fill the empty fields', emptyFields})
        
    }





    //utilizing the workout models using try and catch block code
    //add document to db
    try {
        const Workout = await WorkoutModel.create({title,load,reps})
        res.status(200).json(Workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}
 

//update a workout

const updateWorkout=async(req,res)=>{
    const{id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const workout= await WorkoutModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })
     
    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json({mssg:"workout updated"})
}

//exporting the functions 
module.exports ={
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}

