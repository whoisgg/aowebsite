import Image from "next/image";
import styles from "../../styles/section.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        src={"/images/9.png"}
        alt="logo"
        height={1500}
        width={1500}
        priority
      />
    </div>
  );
};
export default Profile;
