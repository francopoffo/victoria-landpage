import React from "react";
import Image from "next/image";
import classes from "./Servico.module.css";

function Servico(props) {
  return (
    <li className={classes.servico}>
      <Image
        src={`${props.image}`}
        alt={`Ícone representando: ${props.servico}`}
        width={50}
        height={50}
      />
      <h3>{props.servico}</h3>
    </li>
  );
}

export default Servico;
