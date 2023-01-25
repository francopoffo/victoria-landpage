import React from "react";
import classes from "./Review.module.css";
import Image from "next/image";

function Review(props) {
  return (
    <li className={classes.card}>
      <article className={classes.review}>
        <Image
          src="https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
          alt="Avaliação do google com 5 estrelas cheias de 5 possíveis"
          width={150}
          height={100}
        />
        <h3>{props.nome}</h3>
        <h4>{props.avaliacao}</h4>
      </article>
    </li>
  );
}

export default Review;
