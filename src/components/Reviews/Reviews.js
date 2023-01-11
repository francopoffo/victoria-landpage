import React from "react";

import classes from "./Reviews.module.css";

function Reviews(props) {
  return (
    <ul className={classes.reviews}>
      <li className={classes.card}>
        <article className={classes.review}>
          
          <img
            src={
              "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
            }
          />
          <h2>Franco Poffo</h2>
          <h3>Ótima profissional, sempre prestativa e ágil no trabalho!</h3>
        </article>
      </li>
      <li className={classes.card}>
        <article className={classes.review}>
          <img
            src={
              "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
            }
          />
          <h2>Isadora Poleza</h2>
          <h3>Muito atenciosa e prestativa! Recomendo a todos.</h3>
        </article>
      </li>
      <li className={classes.card}>
        <article className={classes.review}>
          <img
            src={
              "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
            }
          />
          <h2>Leticia Lopes</h2>
          <h3>
            Eu gostaria de parabenizar a Dra. Victoria Werner pelo excelente
            trabalho e dedicação. Sempre muito atenciosamente e prática.
            Indicarei sempre!!
          </h3>
        </article>
      </li>
      <li className={classes.card}>
        <article className={classes.review}>
          <img
            src={
              "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
            }
          />
          <h2>Bruna Rosa</h2>
          <h3>Profissional de excelência.</h3>
        </article>
      </li>
    </ul>
  );
}

export default Reviews;
