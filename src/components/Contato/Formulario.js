import React from "react";
import classes from "./Formulario.module.css";

function Formulario() {
  return (
    <form action="https://formsubmit.co/your@email.com" method="POST">
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default Formulario;
