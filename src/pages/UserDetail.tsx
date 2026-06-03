import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
  company: { name: string }
}

export default function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <p className="text-white">Loading...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 px-8 py-12">
      <Link to="/users" className="text-indigo-400 hover:text-indigo-300 mb-8 block">
        ← Back to Users
      </Link>
      <div className="bg-gray-800 rounded-xl p-8 max-w-lg">
        <h1 className="text-3xl font-bold text-white">{user.name}</h1>
        <p className="text-gray-400 mt-2">{user.email}</p>
        <p className="text-gray-400">{user.phone}</p>
        <p className="text-indigo-400 mt-4">{user.company.name}</p>
      </div>
    </div>
  )
}