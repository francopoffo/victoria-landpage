import Link from "next/link";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Victoria Werner</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
