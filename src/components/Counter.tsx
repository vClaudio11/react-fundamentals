import { useState, useEffect } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  const [label, setLabel] = useState("paused")

  useEffect(() => {
    console.log("component mounted")
  }, [])

  useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick")
  }, 1000)

    return () => {
      clearInterval(timer)
      console.log("timer cleaned up")
    }
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Label: {label}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setLabel(label === "counting" ? "paused" : "counting")}>Toggle label</button>
    </div>
  )
}