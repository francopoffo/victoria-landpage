import React from "react";
import Image from "next/image";
import classes from "./Servico.module.css";

function Servico(props) {
  return (
    <li className={classes.servico}>
      <Image
        src={`${props.image}`}
        alt={`Ícone representando: ${props.servico}`}
        width={90}
        height={90}
      />
      <h3>{props.servico}</h3>
    </li>
  );
}

export default Servico;
