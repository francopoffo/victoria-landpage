import React from "react";
import classes from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={classes.sobre}>
      <h2>Sobre mim</h2>
      <p>
        Advogada especialista em causas criminais, Victoria Werner é pós
        graduanda em direito penal e criminologia na PUC/RS.
      </p>
      <h2>Objetivo</h2>
      <p>
        Entregar aos nossos clientes uma defesa humanizada, em que tratamos cada
        caso com a sua individualidade. Fornecendo suporte 24h e atendendo
        urgências a qualquer momento.
      </p>
    </section>
  );
}

export default Sobre;
