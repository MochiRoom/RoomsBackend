import express  from "express"

const app = express()

const PORT = 80

app.get("*", (req, res) => {
    console.log("ky")
})

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT)
})

