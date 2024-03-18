import Image from "next/image";
import styles from "../../styles/section.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      className=" h-screen flex flex-col items-center justify-center pb-5"
      id="hero"
    >
      {/* Logo Image */}
      <div className="mb-8 w-full max-w-md mx-auto">
        <Image
          src="/images/113.png"
          alt="logo"
          width={500}
          height={500}
          priority
          className="w-full h-auto md:w-auto"
        />
      </div>

      {/* Social Networks Bar */}
      <div className="flex justify-center space-x-4 pt-5">
        <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
        <FaTwitter className="text-3xl cursor-pointer hover:text-blue-400" />
        <FaInstagram className="text-3xl cursor-pointer hover:text-pink-600" />
      </div>
    </div>
  );
};

export default Profile;
