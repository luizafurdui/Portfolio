import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <footer className={`w-full mt-auto ${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6"> {/* Add mb-6 to give it extra space from the bottom */}
      <p className="font-ubuntu font-normal text-center text-[16px] leading-[27px] text-white ml-2">
        <span className="text-purple">Copyright Ⓒ 2024 Luiza.</span> All Rights Reserved.
      </p>

      <div className="flex flex-row mt-4 md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[25px] h-[25px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-10"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
