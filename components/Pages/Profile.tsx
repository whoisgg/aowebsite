import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <div
      className=" h-screen flex flex-col items-center justify-center pb-5"
      id="hero"
    >
      {/* Logo Image */}
      <div className="flex justify-center text-4xl font-interTight pb-10 ">
        Dra. ANtonieta ortega Muñoz
      </div>
      <div className="mb-8 w-full max-w-md mx-auto">
        <Image
          src="/images/115.png"
          alt="logo"
          width={400}
          height={500}
          priority
          className="w-full h-auto md:w-auto"
        />
      </div>

      {/* Social Networks Bar */}
      <div className="flex j</div>ustify-center space-x-4 pt-7 pb-0">
        <Link
          href="https://www.instagram.com/dra.antonietaortegamunoz/"
          passHref
          aria-label="instagram"
        >
          <FaInstagram className="text-3xl cursor-pointer hover:text-pink-600" />
        </Link>
        <Link href="https://wa.me/56984644659" passHref>
          <FaWhatsapp
            className="text-3xl cursor-pointer hover:text-green-400"
            aria-label="whatsapp"
          />
        </Link>
        <Link href="https://twitter.com/" passHref>
          <FaSquareXTwitter
            className="text-3xl cursor-pointer hover:invert"
            aria-label="twitter"
          />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
