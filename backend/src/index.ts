import express from "express"
import { DBHandler } from "./infrastructure/database"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})
app.listen(80, () => {
  console.log("Start on port 80.")
})
app.get("/helth-check", async (req, res) => {
  const handler = await DBHandler.init()
  const findResult = await handler.collection("test").find({}).toArray()
  console.log("test")
  console.log(findResult)
  res.send(JSON.stringify({ test: findResult }))
})
app.get("/postArticle", async (req, res) => {
  console.log("post")
  res.send(JSON.stringify("ok"))
})
app.get("/login", async (req, res) => {
  console.log("login")
  res.send(JSON.stringify("ok"))
})