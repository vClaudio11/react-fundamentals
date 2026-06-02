import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface User {
    id: number
    name: string
    email: string
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
}, [])

if (loading) return <p>Loading...</p>

return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </Link>
        </div>
      ))}
    </div>
)
}