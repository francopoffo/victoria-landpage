import React from "react";
import classes from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={classes.sobre}>
      <div className={classes.quemSomos}>
        <h2>Quem somos</h2>
        <p>
          &nbsp;&nbsp;&nbsp;Especializado na área criminal, o escritório
          Victoria Werner Advocacia Criminal preza pelo atendimento qualificado
          e personalizado, com foco em cada cliente e suas necessidades.
          <br></br>
          &nbsp;&nbsp;&nbsp;Nossa missão é entregar soluções jurídicas e todos
          os serviços relacionados à área criminal e penal, atuando em defesa do
          acusado ou a favor da vítima e garantindo o direito ao devido processo
          legal.
          <br></br>
          &nbsp;&nbsp;&nbsp;Pautados pela ética, transparência e lealdade,
          construímos uma defesa justa, baseada na lei e respeitando as
          individualidades. Priorizamos um contato pessoal com os clientes e
          adotamos uma comunicação acessível. Atendimento presencial e online em
          todo o Estado de Santa Catarina.
        </p>
      </div>
      <div className={classes.sobreMim}>
        <h2>Sobre mim</h2>
        <p>
          &nbsp;&nbsp;&nbsp;Advogada especialista em causas criminais, Victoria
          Werner é pós-graduanda em Direito Penal e Criminologia na PUC/RS.
        </p>
      </div>
      <div className={classes.objetivo}>
        <h2>Objetivo</h2>
        <p>
          &nbsp;&nbsp;&nbsp;Entregar aos nossos clientes uma defesa humanizada,
          em que tratamos cada caso com a sua individualidade. Fornecemos
          suporte 24h e atendemos urgências a qualquer momento.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
