import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>OAB/SC 65.581</p>
      <p>
        Telefone: <a href="tel:(47) 99615-1048">(47) 99615-1048</a>
      </p>
      <p>
        E-mail:{" "}
        <a href="mailto:victoriawerneradv@gmail.com">
          victoriawerneradv@gmail.com
        </a>
      </p>
      <p>Todos os direitos reservados © 2023</p>
    </footer>
  );
}

export default Footer;
