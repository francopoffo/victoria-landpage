import React from "react";
import classes from "./Review.module.css";

function Review(props) {
  return (
    <li className={classes.card}>
      <article className={classes.review}>
        <img
          src={
            "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
          }
        />
        <h3>{props.nome}</h3>
        <h4>{props.avaliacao}</h4>
      </article>
    </li>
  );
}

export default Review;
