import { useState, useEffect} from "react";

const UserCard = ({user}) => {
    const [isContacted, setIsContacted] = useState(false);
    const [adress, setAddress] = useState({ street: 'Calle Falsa', number: 123 });


    const { id, name, age, description, image} = user;

    const handLeClick = () => {
        setAddress({ ...adress, street: 'Nueva Calle', number: 456 });
    }

        //console.log(adress);
        return (
            <div className="card">
                <img className="image" src={image} alt={name} />
                <h2 className="name">{name}</h2>
                <p className="edad"> Edad: {age}</p>
                <p className="description"> Descripción: {description}</p>
                <button id={id} onClick={() => handLeClick()}>
                    {
                        isContacted ? "Contactado" : "Contactar"
                    }
                </button>
            </div>
        )
    }
export default UserCard