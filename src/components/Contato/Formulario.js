import React, { useState } from "react";
import classes from "./Formulario.module.css";

function Formulario() {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [aviso, setAviso] = useState(false);

  async function formSubmitHandler(e) {
    e.preventDefault();

    setLoading(true);

    const data = await fetch(
      "https://formsubmit.co/ajax/victoriawerneradv@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      }
    );

    const responseData = await data.json();
    console.log(responseData);

    setLoading(false);

    setNome("");
    setEmail("");
    setMensagem("");
    setAviso(true);
  }

  return (
    <div className={classes.form}>
      <h3>Envie uma mensagem para nós</h3>
      <form method="POST" onSubmit={formSubmitHandler}>
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
      {loading && <p>Estamos enviando a sua mensagem...</p>}
      {aviso && (
        <p>Mensagem enviada com sucesso! Iremos entrar em contato com você.</p>
      )}
    </div>
  );
}

export default Formulario;
