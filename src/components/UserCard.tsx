interface User {
    name: string
    role: string
    age: number
}

interface UserCardProps {
    user: User
}

export function UserCard({ user }: UserCardProps) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <p>{user.age}</p>
        </div>
    )
}