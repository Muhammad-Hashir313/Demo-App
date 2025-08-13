const express = require("express")

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "I guess that worked" })
})

app.listen(PORT, () => console.log("App started on localhost:", PORT))