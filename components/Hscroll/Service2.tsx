import React from "react";
import styles from "../../styles/services.module.scss";

interface Service2Props {
  scrollHeading: string;
  mainImage: string;
  overlayImage: string;
  count: string;
}

const Service2 = ({
  scrollHeading,
  mainImage,
  overlayImage,
}: Service2Props) => {
  return (
    <div className={styles.Swipe}>
      <div className={styles.slide}>
        <div className={styles.slideOuter}>
          <div className={styles.slideInner}>
            <div className={styles.slideContent}>
              <div className={styles.slideContainer}>
                <h2 className={styles.slideHeading}>{scrollHeading}</h2>
                <figure className={styles.slideImgCont}>
                  <img className={styles.slideImg} src={mainImage} alt="" />
                </figure>
                <figure className={styles.overlayImgCont}>
                  <img
                    className={styles.overlayImage}
                    src={overlayImage}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
