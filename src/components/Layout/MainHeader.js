import Link from "next/link";
import classes from "./MainHeader.module.css";
import Image from "next/image";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/francopoffo/image-files/main/logo.png"
            alt="Logo"
            width={155.5}
            height={70}
          />
        </Link>
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
