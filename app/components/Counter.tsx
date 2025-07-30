"use client"

import { useState } from "react"

export default function Counter() {
    const [count, setcount] = useState(0)
  return (
    <div>Counter is here <button onClick={() => setcount(count + 1)}>Count : {count}</button></div>
  )
}
