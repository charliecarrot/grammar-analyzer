// src/index.ts
import express, {type Express, type Request, type Response} from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (_req: Request, res: Response) => {
  res.send('Hey there!')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})