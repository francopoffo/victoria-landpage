import Servico from "./Servico";
import classes from "./Servicos.module.css";
import Image from "next/image";

function Servicos(props) {
  const servicos = props.servicos;

  return (
    <section className={classes.ajuda}>
      <h2>Nossas especialidades</h2>
      <ul className={classes.servicos}>
        {servicos.map((item) => (
          <Servico key={item.id} servico={item.servico} image={item.img} />
        ))}
      </ul>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5547996151048&text=Vim pelo site."
          target="_blank"
          className={classes.contato}
        >
          Clique aqui e fale conosco
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
