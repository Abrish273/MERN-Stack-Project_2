const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)
/*(req, res) => {
  res.json({mssg: 'GET all workouts'})
}*/
// GET a single workout
router.get('/:id', getWorkout)
// POST a new workout
router.post('/', createWorkout)
// DELETE a workout
router.delete('/:id', deleteWorkout)
// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router