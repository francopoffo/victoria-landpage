import React from "react";
import classes from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={classes.sobre}>
      <h2>Sobre mim</h2>
      <p>
        Informações como: tempo de mercado, nível de experiência, área de
        atuação, serviços e diferenciais, missão e valores são fundamentais.
        Mas, não tente estender muito o texto, escreva somente aquilo que seja
        realmente relevante. Textos longos são cansativos e podem fazer com que
        o cliente desista de ler toda a descrição. Informações como: tempo de
        mercado, nível de experiência, área de atuação, serviços e diferenciais,
        missão e valores são fundamentais. Mas, não tente estender muito o
        texto, escreva somente aquilo que seja realmente relevante. Textos
        longos são cansativos e podem fazer com que o cliente desista de ler
        toda a descrição.
      </p>
    </section>
  );
}

export default Sobre;
