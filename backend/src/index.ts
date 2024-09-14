import express, { Request, Response } from "express"
import mongoose from "mongoose"
import { MONGO_URI, PORT } from "./config/config"
import { Quest1 } from "./services/q1"
import Seeder, { DropCollections } from "./seeder"

const app = express()
const port = PORT

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error)
  })

app.get("/quest1", async (req: Request, res: Response) => {
  const result = await Quest1()
  res.send(result)
})

app.post("/seed", async (req: Request, res: Response) => {
  await Seeder()
  res.send("Seed data successfully")
})

app.post("/clear", async (req: Request, res: Response) => {
  await DropCollections()
  res.send("Clear data successfully")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
