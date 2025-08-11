import { useState, useEffect} from 'react';
import UserCard from '../UserCard/UserCard.jsx';
import userImg from "../../assets/usuario-contacto.png";
import './Section.css';

const users = [
    {
        id: 1,
        name: "Juan",
        age: 30,
        description: 'Desarrollador web',
        image: userImg
    },
    {
        id: 2,
        name: "Ana",
        age: 25,
        description: 'Diseñadora gráfica',
        image: userImg
    },
    {
        id: 3,
        name: "Pedro",
        age: 28,
        description: 'Fotógrafo',
        image: userImg
    },

]

const Section = () => {

    const [count, setCount] = useState(0)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        console.log('useEffect ejecutado');
        fetch ('https://dummyjson.com/users')
        .then(res=> res.json())
        .then(data => console.log(data.users))

    }, [count])

    const handleClick = () => setCount  (count + 1);
    const handleLikes = () => setLikes(likes + 1);


    return (
        <>
        <h2>{count}</h2>
            <button onClick={handleClick}>Contador</button>
        <h2>{likes}</h2>
            <button onClick={handleLikes}>Likes</button>
        <section>
            
            {
                users.map((user) => {
                    return (
                        <UserCard key={user.id} user={user} />
                    )
                })

            }
        </section>
        </>
    )
}

export default Section