import React, { useEffect } from "react";
import classes from "./Banner.module.css";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";

let imageSrc = "/img/banner_desktop.jpeg";

function Banner() {
  let windowSize = useWindowSize();

  let userWidth = windowSize.width;

  function bannerImg() {
    if (userWidth < 600) {
      imageSrc = "/img/banner_mobile.jpeg";
    } else {
      imageSrc = "/img/banner_desktop.jpeg";
    }
  }

  bannerImg();

  useEffect(() => {
    bannerImg();
  }, [windowSize]);

  return (
    <div className={classes.banner}>
      <Image src={imageSrc} alt="Mesa com um malhete" fill priority />
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
