const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Must enter a type"
        },
        name: {
            type: String,
            trim: true,
            required: "Must enter a type"
        },
        duration: {
            type: Number,
            required: "Please enter a duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },
    },
    ],
});

const Workout = mongoose.model("Workout", workout);
module.exports = Workout;