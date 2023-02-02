import React from "react";
import { GoLaw } from "react-icons/go";
import classes from "./Servico.module.css";

function Servico(props) {
  return (
    <li className={classes.servico}>
      <h3>{props.servico}</h3>
      <GoLaw className={classes.icon} />
    </li>
  );
}

export default Servico;
