import { useState } from 'react';
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

    const [count, setCount] = useState(0);

    console.log(count);

   
    return (
        <section>
            {
                users.map((user) => {
                    return (
                        <UserCard key={user.id} user={user}/>
                    )
                })

            }
        </section>
    );
}

export default Section