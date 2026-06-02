import { UserCard } from "./components/UserCard"
import { UserContext } from './context/UserContext'


function App() {
  const user = { name: "Von Claudio", role: "Student", age: 19}

  return (
    <UserContext.Provider value={{ user }}>
      <h1>useContext Demo</h1>
      <UserCard />
    </UserContext.Provider>
  )
}

export default App
