import { useState, useEffect } from 'react'
import  UserCard  from '../UserCard/UserCard.jsx'
import './Section.css'



const Section = () => {

    const [count, setCount] = useState(1)
    const [likes, setLikes] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/users?limit=4&skip=${count}`)
            .then(res => res.json())
            .then(data => {setUsers(data.users)
            })

    }, [count])

    const handleClick = () => setCount(count + 1);
    const handleLikes = () => setLikes(likes + 1);


    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Suguiente</button>
            <h2>{likes}</h2>
            <button onClick={handleLikes}>Likes</button>
            <section>
                {
                    users.map(user => <UserCard key={user.id} user={user} />)
                }

            </section>
        </>
    )
}

export default Section