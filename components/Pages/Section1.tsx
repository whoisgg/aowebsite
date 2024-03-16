import Image from "next/image";
import styles from "../../styles/section.module.scss";

const Section1 = () => {
  return (
    <div className={styles.profile}>
      <div>image</div>

      <div className="grid grid-cols-2 gap-4">
        <div>{/* Column Left */}</div>
        <div>
          {/* Column Right */}
          <div className="text-5xl text">
            <h2>Dra Antonieta Ortega</h2>
          </div>
          <div>
            Especialista en sacar a RELUCIR tu MEJOR versión y recuperar tu
            BELLEZA
          </div>
          <div>{/* Another div */}</div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
