import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";

interface Post {
    id: number
    title: string
    body: string
    userId: number
}

export default function PostDetail() {
    // Search for post with exact id
    const { id } = useParams()
    const [post, setPost] = useState<Post | null>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(r => r.json())
            .then(data => {
                setPost(data)
            })
    }, [id])

    if (!post) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <p className="text-white">Loading...</p>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-900 px-8 py-12">
            <Link to="/posts" className="text-indigo-400 hover:text-indigo-300 mb-8 block">
                <p>Back to posts</p>
            </Link>
            <div className="bg-gray-800 rounded-xl p-8 max-w-2xl">
                <p className="text-indigo-400 text-sm mb-2">Post #{post.id}</p>
                <h1 className="text-2xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-gray-400">{post.body}</p>
            </div>
        </div>
    )
}