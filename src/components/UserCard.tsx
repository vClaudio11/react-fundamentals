import { useUser } from '../context/UserContext'

export function UserCard() {
    const { user } = useUser()

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <p>{user.age}</p>
        </div>
    )
}
