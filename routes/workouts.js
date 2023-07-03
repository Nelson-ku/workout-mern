
//imports
const workout=require('../models/workoutsModels')
const express =require ('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutControllers')

//creates an instance of a handler
const router = express.Router()

//used in getting all workouts
router.get('/allWorkouts', getWorkouts)

//Get a single workout
router.get('/singleworkout:id',getWorkout)


// posting a workout
router.post('/createworkouts', createWorkout)

//delete a workout
router.delete('/deleteworkout:id',deleteWorkout)

//updating a workout
router.patch('/updateworkout:id', updateWorkout)


//exporting the routes
module.exports = router