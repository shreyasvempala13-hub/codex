const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

let issues = []

// GET all issues
app.get("/issues", (req, res) => {
    res.json(issues)
})

// POST new issue
app.post("/report", (req, res) => {

    const issue = {
        id: issues.length + 1,
        desc: req.body.desc,
        category: req.body.category,
        location: req.body.location,
        votes: 0,
        status: "Submitted"
    }

    issues.push(issue)

    res.json({message:"Issue reported", issue})
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})