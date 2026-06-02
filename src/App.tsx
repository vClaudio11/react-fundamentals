
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const [label, setLabel] = useState("paused")

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

function App() {
  return (
    <div>
      <h1>useState Demo</h1>
      <Counter />
      <Counter />
    </div>
  )
}

export default App