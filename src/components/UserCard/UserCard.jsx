import { useState, useRef } from "react";

const UserCard = ({ user }) => {
  const [isContacted, setIsContacted] = useState(false);
  const [email, setEmail] = useState("no-contacto@demo.com");
  const [likes, setLikes] = useState(0);
  const ref = useRef(0);

  const { id, firstName, age, role, image } = user;

  // contador con ref + state
  const handleIncreaseRef = () => {
    ref.current++;
    setLikes(likes + 1);
    console.log("Ref interno:", ref.current);
  };

  // alterna contacto y cambia correo según el estado
  const handleContactAndEmail = () => {
    if (!isContacted) {
      // Si no estaba contactado, lo contactamos y le damos un correo
      setIsContacted(true);
      setEmail(`${firstName.toLowerCase()}@empresa.com`);
    } else {
      // Si ya estaba contactado, revertimos al correo genérico
      setIsContacted(false);
      setEmail("no-contacto@demo.com");
    }
  };

  return (
    <div className="card">
      <img className="image" src={image} alt={firstName} />
      <h2 className="name">{firstName}</h2>
      <p className="edad">Edad: {age}</p>
      <p className="rol">{role}</p>

      <button onClick={handleIncreaseRef}>👍 Me gusta ({likes})</button>

      <button id={id} onClick={handleContactAndEmail}>
        {isContacted ? "Contactado" : "Contactar"}
      </button>

      <p className="correo">📧 {email}</p>
    </div>
  );
};

export default UserCard;
