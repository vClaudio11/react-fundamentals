import Counter from "./components/Counter"
import { UserCard } from "./components/UserCard"


function App() {
  return (
    <div>
      <h1>useState Demo</h1>
      <Counter />
      <UserCard user={{name: "John", role: "Student", age: 21}}/>
    </div>
  )
}

export default App