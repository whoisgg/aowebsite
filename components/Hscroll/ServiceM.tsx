import React from "react";
import styles from "../../styles/services.module.scss";

const ServiceM = () => {
  return (
    <div>
      <div className={styles.Swipe}>
        <div className={styles.ScrollOne}>
          <div className={styles.slideOuter}>
            <div className={styles.slideInner}>
              <div className={styles.slideContent}>
                <div className={styles.slideContainer}>
                  <h2 className={styles.slideHeading}>SERVICIOS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceM;
