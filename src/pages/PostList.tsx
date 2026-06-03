import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
    id: number
    title: string
    body: string
    userId: number
}

export default function PostList() {
    //State declarations
    const [posts, setPost] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    
    // useEffect to load data
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(r => r.json())
            .then(data => {
                setPost(data)
                setLoading(false)
            })
    }, [])

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <p className="text-white">Loading...</p>
        </div>
    )

    // JSX
    return (
        <div className="grid grid-cols-3 gap-6 bg-gray-800 p-8">
            
            {posts.slice(0,10).map(post => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out">
                        <h2 className="text-lg text-gray-300 p-2 mb-4">{post.title}</h2>
                        <p className="text-gray-400">{post.body}</p>      
                    </div>
                </Link>
            ))}
        </div>
    )
}