import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface User {
  id: number
  name: string
  email: string
  phone: string
  company: { name: string }
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

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <p className="text-white text-xl">Loading...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Users</h1>
      <div className="grid grid-cols-3 gap-6">
        {users.map(user => (
          <Link
            to={`/users/${user.id}`}
            key={user.id}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-white font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{user.email}</p>
            <p className="text-gray-400 text-sm">{user.phone}</p>
            <p className="text-indigo-400 text-sm mt-3">{user.company.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}