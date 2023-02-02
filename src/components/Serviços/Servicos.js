import React, { useEffect, useState } from "react";
import Servico from "./Servico";
import classes from "./Servicos.module.css";
import Image from "next/image";

function Servicos() {
  const [servicos, setServicos] = useState();
  const [servicosLoaded, setServicosLoaded] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      const dados = await fetch(
        "https://victoria-landpage-default-rtdb.firebaseio.com/servicos.json"
      );

      const dadosConvertidos = await dados.json();

      const SERVICOS = [];

      for (const key in dadosConvertidos) {
        SERVICOS.push({
          id: key,
          servico: dadosConvertidos[key].servico,
        });

        setServicos(SERVICOS);
        setServicosLoaded(true);
      }
    };
    FetchData();
  }, []);

  return (
    <section className={classes.ajuda}>
      <h2>Veja no que podemos te ajudar</h2>
      <ul className={classes.servicos}>
        {servicosLoaded &&
          servicos.map((item) => (
            <Servico key={item.id} servico={item.servico} />
          ))}
      </ul>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5547996151048&text=Vim pelo site."
          target="_blank"
          className={classes.contato}
        >
          Urgência? Clique aqui e fale conosco
          <Image
            src="https://raw.githubusercontent.com/francopoffo/image-files/main/whatsapp.png"
            alt="Logo do whatsapp"
            width={35}
            height={35}
          />
        </a>
      </div>
    </section>
  );
}

export default Servicos;
