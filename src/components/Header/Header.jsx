import logoImg from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logoImg} alt="" />
      </a>
      <div className={styles["user-info"]}>
        <span className={styles.userName}>B</span>
        <span className={styles.userEmail}>user@mail.com</span>
      </div>
      <div className={styles.cartInfo}>
        <button type="button" className={styles.btnCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
