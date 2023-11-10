'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navigatio.module.scss';
// import Nav from './Nav';

const menu = {
    open: {
        width: "480px",
        height: "650px",
        transition: { duration: .7, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        transition: { duration: .7, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

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
                {/* <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence> */}
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}

function Button({isActive, toggleMenu}) {
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}) {
    return (    
        <div className={styles.perspectiveText}>
            <p>{label}</p>
        </div>
    )
}
