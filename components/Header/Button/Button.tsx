import { motion } from "framer-motion";
import styles from "../../../styles/button.module.scss";
import React from "react"; // Import React

// Define the prop types for the Button component
interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void; // Assuming toggleMenu is a function that takes no arguments and returns nothing
}

const Button: React.FC<ButtonProps> = ({ isActive, toggleMenu }) => {
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
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

// Define the prop types for the PerspectiveText component
interface PerspectiveTextProps {
  label: string;
}

const PerspectiveText: React.FC<PerspectiveTextProps> = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};

export default Button;
