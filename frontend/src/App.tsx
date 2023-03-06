import axios from "axios"
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/page/login"
import { Detail } from "./components/page/detail"
import {Post} from "./components/page/post"

function App() {
  const [value, setValue] = useState<number | null>(null)

  useEffect(() => {
    axios
      .get("http://localhost/helth-check")
      .then((res) => setValue(res.status))
      .catch((e: Error) => {
        console.error(e.toString())
      })
  }, [])

  return (
    <div className="font-bold">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
