import React from "react";
import classes from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={classes.sobre}>
      <h2>Quem somos</h2>
      <p>
        Especializado na área criminal, o escritório Victoria Werner Advocacia
        Criminal preza pelo atendimento qualificado e personalizado, com foco em
        cada cliente e suas necessidades. Nossa missão é entregar soluções
        jurídicas e todos os serviços relacionados à área criminal e penal,
        atuando em defesa do acusado ou a favor da vítima e garantindo o direito
        ao devido processo legal. Pautados pela ética, transparência e lealdade,
        construímos uma defesa justa, baseada na lei e respeitando as
        individualidades. Priorizamos um contato pessoal com os clientes e
        adotamos uma comunicação acessível. Atendimento presencial e online em
        todo o Estado de Santa Catarina. Fornecemos suporte 24 horas e atendemos
        urgências a qualquer momento.
      </p>
      <h2>Sobre mim</h2>
      <p>
        Advogada especialista em causas criminais, Victoria Werner é
        pós-graduanda em Direito Penal e Criminologia na PUC/RS.
      </p>
      <h2>Objetivo</h2>
      <p>
        Entregar aos nossos clientes uma defesa humanizada, em que tratamos cada
        caso com a sua individualidade.
      </p>
    </section>
  );
}

export default Sobre;
