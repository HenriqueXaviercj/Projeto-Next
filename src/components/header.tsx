import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const user = false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"} className={styles.logo}>
          <Image src={"/assets/dogs.svg"} width={28} height={22} alt="Dogs" />
        </Link>
        {user ? (
          <Link href={"/conta"} className={styles.login}>
            Conta
          </Link>
        ) : (
          <Link href={"/login"} className={styles.login}>
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
