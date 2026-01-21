const express = require("express")
const app = express()

app.use((req,res,next) => {
console.log(req.method, req.url)
next()
})


const workouts = [
  {
    id: 1,
    name: "Push-Ups",
    muscleGroup: "Chest",
    difficulty: "Beginner",
    duration: 10,
    equipment: false
  },
  {
    id: 2,
    name: "Squats",
    muscleGroup: "Legs",
    difficulty: "Beginner",
    duration: 15,
    equipment: false
  },
  {
    id: 3,
    name: "Plank Hold",
    muscleGroup: "Core",
    difficulty: "Beginner",
    duration: 5,
    equipment: false
  },
  {
    id: 4,
    name: "Bench Press",
    muscleGroup: "Chest",
    difficulty: "Intermediate",
    duration: 20,
    equipment: true
  },
  {
    id: 5,
    name: "Deadlift",
    muscleGroup: "Back",
    difficulty: "Advanced",
    duration: 25,
    equipment: true
  },
  {
    id: 6,
    name: "Pull-Ups",
    muscleGroup: "Back",
    difficulty: "Intermediate",
    duration: 15,
    equipment: true
  },
  {
    id: 7,
    name: "Lunges",
    muscleGroup: "Legs",
    difficulty: "Beginner",
    duration: 12,
    equipment: false
  },
  {
    id: 8,
    name: "Shoulder Press",
    muscleGroup: "Shoulders",
    difficulty: "Intermediate",
    duration: 18,
    equipment: true
  },
  {
    id: 9,
    name: "Bicep Curls",
    muscleGroup: "Arms",
    difficulty: "Beginner",
    duration: 10,
    equipment: true
  },
  {
    id: 10,
    name: "Mountain Climbers",
    muscleGroup: "Full Body",
    difficulty: "Intermediate",
    duration: 8,
    equipment: false
  }
];


app.get("/", (req,res ) => {
    res.status(200).send("<h1>Welcome! This is a fitness workout API where you can see different workouts.</h1>")
})

app.get("/docs", (req,res ) => {
    res.status(200).send("<h1>You can use {/api/workouts} to see every workout. For individual ones you can use {/api/workouts/:id}   </h1>")
})

app.get("/api/workouts", (req,res ) => {
    res.status(200).json(workouts)
})

app.get("/api/workouts/:id", (req,res ) => {
    res.status(200).json(workouts[req.params.id - 1])
})

app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>")
    console.log("404 Error")
})

app.listen(3000, () => {
    console.log("Server is running")
})