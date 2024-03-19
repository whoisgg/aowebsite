import styles from "../../styles/section.module.scss";

const Section1 = () => {
  return (
    <div className={styles.profile} id="about">
      <div className={styles.textContainer}>
        <p
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock1}`}
        >
          ESpecializada en
        </p>
        <p
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock2}`}
        >
          Endodoncia y
        </p>
        <p
          className={`${styles.largeText} ${styles.coloredText} ${styles.textBlock} ${styles.textBlock3}`}
        >
          Armonizacion Orofacial
        </p>
      </div>
    </div>
  );
};
export default Section1;
