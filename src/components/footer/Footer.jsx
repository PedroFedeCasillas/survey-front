import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {BsLinkedin, BsWhatsapp, BsGithub} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.divLeft}>
        © 2023 Challenge Survey PedroFedeCasillas - Henry. All Rights Reserved.
      </div>

      <div className={styles.divRight}>
        <Link to="https://github.com/PedroFedeCasillas/survey-front" target="_blank">
          <BsGithub className={styles.logo} style={{color: "#919a95"}}/>
        </Link>
        <Link to="https://wa.me/5491151310624" target="_blank">
          <BsWhatsapp className={styles.logo} style={{color: "#0f490f"}}/>
        </Link>
        <Link to="mailto:pedrofedecasillas2@gmail.com">
          <BiLogoGmail className={styles.logo} style={{color: "#711818"}}/>
        </Link>
        <Link to="https://www.linkedin.com/in/pedro-fede-casillas-dev/" target="_blank">
          <BsLinkedin className={styles.logo} />
        </Link>
      </div>
    </footer>
  );
};
