const express = require("express")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT

const app = express()

// haloha
app.get('/', (req, res) => {
    res.json({ message: "This should work fine?" })
})

app.listen(PORT, '0.0.0.0', () => console.log("App started on localhost:", PORT))
