import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    alert("Mensaje enviado con éxito ✅");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={form.correo}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          value={form.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
