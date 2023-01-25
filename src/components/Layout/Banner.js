import React from "react";
import classes from "./Banner.module.css";
import Image from "next/image";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.conteudo}>
        <h1 className={classes.titulo}>
          ADVOGADA ESPECIALIZADA EM CASOS CRIMINAIS
        </h1>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5547996151048&text=Vim pelo site."
            target="_blank"
            className={classes.contato}
          >
            Fale agora com uma especialista
            <Image
              src="https://raw.githubusercontent.com/francopoffo/image-files/main/whatsapp.png"
              alt="Logo do whatsapp"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
