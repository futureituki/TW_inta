import axios from "axios"
import React, { useEffect, useState } from "react"

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
      <div>Hello World</div>
      <div>{value}</div>
    </div>
  )
}

export default App
