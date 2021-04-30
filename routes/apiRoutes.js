const router = require('express').Router();
const Workout = require('../models/Workout.js');



router.post("/workouts", (req, res) => {
    console.log("route hit");
    Workout.create({})
    .then((workoutdb) => {
        console.log(workoutdb, "This is from post route")
        res.json(workoutdb);
    }).catch((err) => {
        console.err(err)
    })
});

router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}})
        .then((workoutdb) => {
            console.log("This is from the put route");
            res.json(workoutdb);
        })
});

router.get("/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then((workoutdb) => {
        res.json(workoutdb)
    }) 
});

router.get("/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then((workoutdb) => {
        res.json(workoutdb)
    }) 
});


module.exports = router; 