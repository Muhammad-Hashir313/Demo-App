const express = require("express")

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Get Request message" })
})

app.listen(PORT, () => console.log("App started on localhost:", PORT))