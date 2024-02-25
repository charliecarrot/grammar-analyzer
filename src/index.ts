// src/index.ts
import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'
import OpenAI from 'openai'
import { complete } from './openai/openai'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())

// POST
app.post('/', async (req: Request, res: Response) => {
    const { sentence } = req.body

    if (!sentence) {
        return res.status(400).json({ success: false, message: 'No sentence provided.' })
    }

    try {
        const openai = new OpenAI({
            apiKey: process.env['OPENAI_API_KEY'],
        })
        const response = await complete(openai, sentence)
        if (!response.success) {
            throw new Error(response.message)
        } else {
            return res.status(200).json(response)
        }
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
