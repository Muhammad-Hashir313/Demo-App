const express = require("express")

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Get Something" })
})

app.listen(PORT, () => console.log("App started on localhost:", PORT))