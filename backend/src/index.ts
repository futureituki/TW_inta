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
app.post("/Articles", async (req, res) => {//投稿
  console.log("test")
  res.send(JSON.stringify("ok"))
})
app.put("/Articles", async (req, res) => {//更新
  console.log("post")
  res.send(JSON.stringify("ok"))
})
app.get("/Articles", async (req, res) => {//取得
  console.log("post")
  res.send(JSON.stringify("ok"))
})
app.delete("/Articles", async (req, res) => {//削除
  res.send(JSON.stringify("bye"))
})
app.get("/login", async (req, res) => {
  console.log("login")
  var queryList = req.url.slice(8, req.url.length).split('&')
  if(queryList.length < 0) res.send(JSON.stringify(false))
  var id, pass
  for(var i = 0; i < queryList.length; i++){
    var splited = queryList[i].split('=')
    switch(splited[0]){
      case "id": id = splited[1]; break
      case "pass": pass = splited[1]; break
    }
  }
  const handler = await DBHandler.init()
  const findResult = await handler.collection('test').insertOne({user: id, pwd: pass})
  res.send(JSON.stringify(findResult))
})