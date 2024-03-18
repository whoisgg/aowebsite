import Image from "next/image";
import styles from "../../styles/section.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        src={"/images/9.png"}
        alt="logo"
        height={3000}
        width={3000}
        priority
      />
    </div>
  );
};
export default Profile;
