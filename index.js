const express = require("express")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "This should work fine?" })
})

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => console.log("App started on localhost:", PORT))
}

module.exports = app  // export for tests
