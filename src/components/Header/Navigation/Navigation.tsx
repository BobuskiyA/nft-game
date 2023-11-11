"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navigatio.module.scss";
import NavList from "./NavList/NavList";

type BtnProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const menu = {
  open: {
    width: "380px",
    height: "600px",
    left: -40,
    transition: { duration: 0.7, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "90px",
    transition: {
      duration: 0.7,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.navigation}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <NavList />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}

const Button: FC<BtnProps> = ({ isActive, toggleMenu }) => {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className={styles.perspectiveText}>
            <p>Menu</p>
          </div>
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className={styles.perspectiveText}>
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
