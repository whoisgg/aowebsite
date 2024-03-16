import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/nav.module.scss";
import { links, footerLinks } from "./data"; // Ensure these imports match your file structure
import { perspective, slideIn } from "./anim"; // Ensure these imports match your file structure

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* The anchor tag is correctly placed within the motion.div for navigation */}
                <a href={href} className={styles.link}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href} // Correctly placing href here
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className={styles.footerLink}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
