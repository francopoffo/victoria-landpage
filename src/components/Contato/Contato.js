import React from "react";
import classes from "./Contato.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

function Contato() {
  return (
    <section className={classes.contato}>
      <h2>Atendemos presencialmente em Balneário Camboriú e Itajaí</h2>
      <div className={classes.infos}>
        <address className={classes.local}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227582.70437221273!2d-48.7200837!3d-26.9675404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a47b9f5318f844!2sVictoria%20Werner%20-%20Advocacia%20Criminal!5e0!3m2!1spt-BR!2sbr!4v1674068139570!5m2!1spt-BR!2sbr"
            width="700"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </address>
        <h3>Entre em contato conosco</h3>
        <div className={classes.enderecos}>
          <p>
            <BsTelephoneFill />{" "}
            <a href="tel:(47) 99615-1048">(47) 99615-1048</a>
          </p>
          <p>
            <MdEmail />{" "}
            <a href="mailto:victoriawerneradv@gmail.com">
              victoriawerneradv@gmail.com
            </a>
          </p>
          <p>
            <FaInstagramSquare />{" "}
            <a href="https://www.instagram.com/victoriawerneradv/">
              victoriawerneradv
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contato;
