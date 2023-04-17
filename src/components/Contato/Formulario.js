import React, { useState } from "react";
import classes from "./Formulario.module.css";

function Formulario() {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aviso, setAviso] = useState(false);

  function formSubmitHandler(e) {
    e.preventDefault();

    setNome("");
    setEmail("");
    setMensagem("");
    setAviso(true);
  }

  return (
    <div className={classes.form}>
      <h3>Envie uma mensagem para nós</h3>
      <form
        action="https://formsubmit.co/franco_sutter@yahoo.com.br"
        method="POST"
        onSubmit={formSubmitHandler}
      >
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <textarea
          rows={7}
          name="message"
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => {
            setMensagem(e.target.value);
          }}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {aviso && (
        <p>Mensagem enviada com sucesso! Iremos entrar em contato com você.</p>
      )}
    </div>
  );
}

export default Formulario;
