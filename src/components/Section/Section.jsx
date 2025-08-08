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
    {        id: 3,
        name: "Pedro",
        age: 28,
        description: 'Fotógrafo',
        image: userImg
    },

]

const Section = () => {
    return (
        <section>
            {
                users.map(user => {
                    return (
                        <div className= "card" key={user.id}>
                            <img className= "image" src={user.image} alt={user.name} />
                            <h2 className="name">{user.name}</h2>
                            <p className="edad"> Edad: {user.age}</p>
                            <p className="description"> Descripción: {user.description}</p>
                        </div>
                    )
                })

            }
        </section>
    );
}

export default Section