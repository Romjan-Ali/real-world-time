import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const port = 8080

app.get('/current-time', (req, res) => {
    const currentDateTime = new Date().toISOString()
    return res.json({ currentDateTime })
})

app.get('/', (req, res) => {
    return res.send(`<h1>Server is running on port ${port}</h1>`)
})

app.listen(port, () => {
    console.log(`backend server is running on port ${port}`)
})


/* export default function handler(req, res) {
    try {
        res.status(200).json({ message: "Backend is running!" });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
} */
