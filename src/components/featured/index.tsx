import React from "react";
import { motion } from "framer-motion";
// import { ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
type Props = {};

const Featured = (props: Props) => {
  const { t } = useTranslation("global");

  return (
    <div
      id="home"
      className="relative bg-primary text-textPrimary h-screen max-w-[2000px] min-w-full "
    >
      <img
        src="/images/gallery/sağdan.jpg"
        className="fixed h-screen  w-screen object-cover"
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-bgPrimary z-40"></div>
      <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-bgPrimary z-40 rotate-1 "></div>
      <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-bgPrimary z-40 -rotate-1 "></div>
      <div
        className="absolute inset-0 bg-black bg-opacity-20  flex md:items-end 
        md:justify-start items-center justify-center  "
      >
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 max-w-4xl md:text-left text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Harem Perde & Design
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-4">
            {t("featuredDesc")}
          </p>
          <Link to="refarance" smooth={true} duration={500}>
            <button
              className="bg-textPrimary text-xs md:text-base 
            text-black px-4 py-2 rounded-md mt-6"
            >
              {t("referenceButton")}
            </button>
          </Link>
          <hr className="hidden md:block  mt-8" />
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
