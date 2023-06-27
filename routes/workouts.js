const express =require ('express')


const router = express.Router()

//used in getting all workouts
router.get('/',(req, res)=>{
    res.json({mssg:'get all workouts'})
})

//Get a single workout
router.get('/:id',(res, req)=>{
    res.json({mssg:'Get a single workout'})
})

// posting a workout

router.post('/',(req, res)=>{
    res.json({mssg:'post a new workout'})
})

//delete a workout

router.delete('/:id',(req, res)=>{
    res.json({mssg:'deleting a  workout'})
})

//updating a workout

router.patch('/',(req, res)=>{
    res.json({mssg:'updating a workout '})
})
module.exports = router