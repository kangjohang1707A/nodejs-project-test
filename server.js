require("dotenv/config")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

async function main() {
    app.use(express.json())

    app.get('/', async (req, res) => {
        res.send("Hello world")
    })

    app.use((req, res, next) => {
        const error = new Error("not found")
        next(error)
    })

    app.use((error, req, res) => {
        res.status(error.status || 500).json({
            msg: error.message
        })
    })


    app.listen(port, () => console.log('> Server is up and running on port : ' + port))
}

main()