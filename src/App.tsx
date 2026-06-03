import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import UserDetail from "./pages/UserDetail"
import Users from './pages/Users'
import TextList from "./pages/Practice"

function App() {

  return (
    <div>
      <TextList />
    </div>
  )
}

export default App
// return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/users/1">User 1</Link>
//         <Link to="/users/2">User 2</Link>
//         <Link to="/users">Users</Link>
//       </nav>
//       <Routes>
//         <Route path="/users" element={<Users />} />
//         <Route path="/users/:id" element={<UserDetail />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>