// src/index.ts
import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

// Middleware to parse JSON body
app.use(express.json())

// Routes

// POST
app.post('/', async (req: Request, res: Response) => {
    const { sentence } = req.body

    if (!sentence) {
        return res.status(400).json({ success: false, message: 'No sentence provided.' })
    }

    try {
        return res.status(200).json({
            success: true,
            message: sentence,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: 'Failed to process sentence.' })
    }
})

// GET
app.get('/', async (_req: Request, res: Response) => {
    return res.send('Send a POST request to this URL with the following JSON body: { sentence: "Your sentence here." }')
})

app.listen(port, () => {
    console.log(`[server]: Server is running on port ${port}`)
})
