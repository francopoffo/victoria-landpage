import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.conteudo}>
        <h1 className={classes.titulo}>
          ADVOGADA ESPECIALIZADA EM CASOS CRIMINAIS
        </h1>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5547999230603&text=Vim pelo site."
            target="_blank"
            className={classes.contato}
          >
            Fale agora com uma especialista
            <img
              src={
                "https://raw.githubusercontent.com/francopoffo/image-files/main/whatsapp.png"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
