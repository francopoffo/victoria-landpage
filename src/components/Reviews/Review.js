import React from "react";
import classes from "./Review.module.css";

function Review(props) {
  return (
    <li className={classes.card}>
      <article className={classes.review}>
        <img src="public\five-star.png" />
        <h2>{props.name}</h2>
        <h3>{props.review}</h3>
      </article>
    </li>
  );
}

export default Review;
