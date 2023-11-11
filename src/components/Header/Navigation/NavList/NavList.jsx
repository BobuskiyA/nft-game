import styles from "./NavList.module.scss";
import { motion } from "framer-motion";
import { perspective, slideIn } from "./anim";
import HeaderContent from "@/data/HeaderContent.json";

function NavList() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {HeaderContent.map((currentLink, i) => {
          const { title, link } = currentLink;
          return (
            <div
              key={`b_${i}`}
              className={styles.linkContainer}
            >
              <motion.a
                href={link}
                className={styles.link}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavList;