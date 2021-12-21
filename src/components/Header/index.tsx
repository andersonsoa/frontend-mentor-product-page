import NextImage from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

import styles from "./styles.module.scss";
import { Navlink } from "../Navlink";
import { NavCart } from "../NavCart";

export const Header = () => {
  return (
    <div className={styles.header__container}>
      <header>
        <div className={styles.header__logo}>sneakers</div>

        <nav className={styles.header__nav}>
          <ul>
            <Navlink href="/">Collections</Navlink>
            <Navlink href="/">Men</Navlink>
            <Navlink href="/" active>
              Women
            </Navlink>
            <Navlink href="/">About</Navlink>
            <Navlink href="/">Contact</Navlink>
          </ul>
        </nav>

        <NavCart />

        <div className={styles.header__profile}>
          <NextImage src="/image-avatar.png" layout="fill" />
        </div>
      </header>
    </div>
  );
};
