import React from "react";
import classes from "./Contato.module.css";

function Contato() {
  return (
    <section className={classes.contato}>
      <h2>Informações de contato</h2>
      <div className={classes.infos}>
        <div className={classes.enderecos}>
          <p>
            Telefone: <a href="tel:(47) 99923-0603">(47) 99923-0603</a>
          </p>
          <p>
            E-mail:{" "}
            <a href="mailto:victoriawerneradv@gmail.com">
              victoriawerneradv@gmail.com
            </a>
          </p>
        </div>

        <address className={classes.local}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227582.70437221273!2d-48.7200837!3d-26.9675404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a47b9f5318f844!2sVictoria%20Werner%20-%20Advocacia%20Criminal!5e0!3m2!1spt-BR!2sbr!4v1674068139570!5m2!1spt-BR!2sbr"
            width="600"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </address>
      </div>
    </section>
  );
}

export default Contato;
