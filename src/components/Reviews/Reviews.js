import React from "react";

import classes from "./Reviews.module.css";

function Reviews(props) {
  return (
    <section className={classes.avaliacoes}>
      <div>
        <h2>
          Atendimento humano e de alto nível reconhecido pelos nossos clientes
        </h2>
      </div>
      <ul className={classes.reviews}>
        <li className={classes.card}>
          <article className={classes.review}>
            <img
              src={
                "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
              }
            />
            <h3>Franco Poffo</h3>
            <h4>Ótima profissional, sempre prestativa e ágil no trabalho!</h4>
          </article>
        </li>
        <li className={classes.card}>
          <article className={classes.review}>
            <img
              src={
                "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
              }
            />
            <h3>Isadora Poleza</h3>
            <h4>Muito atenciosa e prestativa! Recomendo a todos.</h4>
          </article>
        </li>
        <li className={classes.card}>
          <article className={classes.review}>
            <img
              src={
                "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
              }
            />
            <h3>Leticia Lopes</h3>
            <h4>
              Eu gostaria de parabenizar a Dra. Victoria Werner pelo excelente
              trabalho e dedicação. Sempre muito atenciosamente e prática.
              Indicarei sempre!!
            </h4>
          </article>
        </li>
        <li className={classes.card}>
          <article className={classes.review}>
            <img
              src={
                "https://raw.githubusercontent.com/francopoffo/image-files/main/five-star.png"
              }
            />
            <h3>Bruna Rosa</h3>
            <h4>Profissional de excelência.</h4>
          </article>
        </li>
      </ul>
      <div className={classes.botaoreviews}>
        <a
          className={classes.botao}
          href="https://www.google.com/search?q=Victoria+Werner+-+Advocacia+Criminal&stick=H4sIAAAAAAAA_-NgU1IxqLAwMUgyT0lMTEkxNLcwNkixMqgwSjQxT7JMMzU2tEizMDFZxKoSlplckl-UmagQnlqUl1qkoKvgmFKWn5yYDBRyLsrMzcxLzAEALS6sTU8AAAA&hl=pt-BR&mat=CRYHYFl2NyjeElcBNqvzOhlZxxR6pQ6kzh7h8P42VvkPoKnDQWznttIsdZcJmWHCNf_NJvKpFIfq0xtplutWeaOJv1QSoB5L0317rdRLOHj5k6fTW3c7BMRl7qXov5zGnkM&authuser=0#lrd=0x840b7daadd17830d:0x2a47b9f5318f844,1,,,,"
        >
          Confira todas as nossas avaliações
          <img
            src={
              "https://raw.githubusercontent.com/francopoffo/image-files/main/google-logo.png"
            }
          ></img>
        </a>
      </div>
    </section>
  );
}

export default Reviews;
