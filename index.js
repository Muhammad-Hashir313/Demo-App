const express = require("express")

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Will it work this time?" })
})

app.listen(PORT, () => console.log("App started on localhost:", PORT))