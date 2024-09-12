import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <footer className={`w-full mt-auto ${styles.flexCenter} ${styles.paddingY} flex-col`}>

    {/* Footer Content */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">

      {/* Copyright Text */}
      <p className="font-ubuntu font-normal text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[60px] leading-[22px] sm:leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[32px] text-white ml-2">
        <span className="text-purple">Copyright Ⓒ 2024 Luiza.</span> All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row mt-4 md:mt-0 lg:mt-4 xl:mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[100px] xl:h-[100px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1
                ? "mr-6 sm:mr-8 md:mr-5 lg:mr-4 xl:mr-14"
                : "mr-7"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
