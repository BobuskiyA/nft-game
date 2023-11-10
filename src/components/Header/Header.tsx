import { useContext } from "react";
import { ScrollContext } from "@/helpers/scrollContext";
import { ScrollProvider } from "@/helpers/scrollProvider";
import HeaderContent from "@/data/HeaderContent.json";
import styles from "./Header.module.scss";
import Navigation from './Navigation/Navigation';

const Header = () => {
  const scrollTo = useContext(ScrollContext);

  return (
    <header className={styles.header}>
      {/* <ul className={styles.header_list}>
        {HeaderContent.map((currentLink) => (
          <li
            key={currentLink.title}
            className={styles.header_list_item}
          >
            <a
              href={`#${currentLink.link}`}
              className={styles.header_link}
              onClick={(event) => scrollTo(event, `#${currentLink.link}`)}
            >
              {currentLink.title}
            </a>
          </li>
        ))}
      </ul> */}

      <div className={styles.navigation}>
        <Navigation />
      </div>

      <ul className={styles.header_list}>
        <li className={styles.header_list_item}>
          <a
            href="#"
            className={`bold ${styles.header_link}`}
          >
            smv
          </a>
        </li>
        <li className={styles.header_list_item}>
          <a
            href="#"
            className={styles.header_link}
          >
            Connect wallet
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
