import { useParams } from 'react-router-dom'

export default function UserDetail() {
    const { id } = useParams()

    return (
        <div>
            <h1>User Detail</h1>
            <p>Viewing user: {id}</p>
        </div>
    )
}