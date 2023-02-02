import React, { useEffect, useState } from "react";
import Review from "./Review";
import Image from "next/image";
import classes from "./Reviews.module.css";

function Reviews() {
  const [dados, setDados] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      const dados = await fetch(
        "https://victoria-landpage-default-rtdb.firebaseio.com/reviews.json"
      );
      const dadosConvertidos = await dados.json();

      const AVALIACOES = [];

      for (const key in dadosConvertidos) {
        AVALIACOES.push({
          id: key,
          nome: dadosConvertidos[key].nome,
          avaliacao: dadosConvertidos[key].avaliacao,
        });

        setDados(AVALIACOES);
        setDataLoaded(true);
      }
    };
    FetchData();
  }, []);

  return (
    <section className={classes.avaliacoes}>
      <div>
        <h2>Veja o feedback dos nossos clientes</h2>
      </div>
      <ul className={classes.reviews}>
        {dataLoaded &&
          dados.map((review) => (
            <Review
              key={review.id}
              nome={review.nome}
              avaliacao={review.avaliacao}
            />
          ))}
      </ul>
      <div className={classes.botaoreviews}>
        <a
          className={classes.botao}
          href="https://www.google.com/search?q=Victoria+Werner+-+Advocacia+Criminal&stick=H4sIAAAAAAAA_-NgU1IxqLAwMUgyT0lMTEkxNLcwNkixMqgwSjQxT7JMMzU2tEizMDFZxKoSlplckl-UmagQnlqUl1qkoKvgmFKWn5yYDBRyLsrMzcxLzAEALS6sTU8AAAA&hl=pt-BR&mat=CRYHYFl2NyjeElcBNqvzOhlZxxR6pQ6kzh7h8P42VvkPoKnDQWznttIsdZcJmWHCNf_NJvKpFIfq0xtplutWeaOJv1QSoB5L0317rdRLOHj5k6fTW3c7BMRl7qXov5zGnkM&authuser=0#lrd=0x840b7daadd17830d:0x2a47b9f5318f844,1,,,,"
        >
          Confira todas as avaliações
          <Image
            src="https://raw.githubusercontent.com/francopoffo/image-files/main/google-logo.png"
            alt="Logo do Google"
            width={35}
            height={35}
          ></Image>
        </a>
      </div>
    </section>
  );
}

export default Reviews;
