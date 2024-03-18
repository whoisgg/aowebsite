import Image from "next/image";
import styles from "../../styles/section.module.scss";

const Section1 = () => {
  return (
    <div className={styles.profile} id="about">
      <div className="font-bebasNeue">
        {/* <div
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock1}`}
        >
          <span className={`${styles.inlineText}`}>Dra. </span>
          <span>Antonieta Ortega </span>
        </div> */}

        {/* <p
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock2}`}
        >
          Cirujano Dentista
        </p> */}
        <p
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock3}`}
        >
          ESpecializada en
        </p>
        <p
          className={`${styles.largeText} ${styles.textBlock} ${styles.textBlock4}`}
        >
          Endodoncia y
        </p>
        <p
          className={`${styles.largeText} ${styles.coloredText} ${styles.textBlock} ${styles.textBlock5}`}
        >
          Armonizacion Orofacial
        </p>
      </div>
    </div>
  );
};
export default Section1;
