import { useState, useRef } from "react";

const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    const [adress, setAddress] = useState({ street: 'Calle Falsa', number: 123 });
    const ref = useRef(0)
    const { id, firstName, age, role, image } = user;

    const handLeClick = () => {
        setAddress({ ...adress, street: 'Nueva Calle', number: 456 });
    }

    console.log('render');

    const handLeIncreaseRef = () => {
        ref.current++;
        console.log(ref);
    }

    //console.log(adress);
    return (
        <div className="card">
            <img className="image" src={image} alt={firstName} />
            <h2 className="name">{firstName}</h2>
            <p className="edad"> Edad: {age}</p>
            <p className="Rol"> {role}</p>
            <button onClick={handLeIncreaseRef}> Me gusta </button>
            <button id={id} onClick={() => handLeClick()}>
                {
                    isContacted ? "Contactado" : "Contactar"
                }
            </button>
        </div>
    )
}
export default UserCard