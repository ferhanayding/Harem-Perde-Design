import React from "react";
import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-scroll";
type Props = {};

const Featured = (props: Props) => {
  return (
    <div
      id="home"
      className="relative text-textPrimary max-w-[2000px] min-w-full overflow-hidden"
    >
      <ParallaxBanner
        layers={[
          {
            image: "/images/gallery/sağdan.jpg",
            speed: -20,
          },
        ]}
        className="xl:aspect-[2/1] aspect-[1] "
      >
        <div
          className="absolute inset-0  flex md:items-end 
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
              Siz de evinize veya iş yerinize şıklık ve işlevsellik katmak
              isterseniz, bizi tercih edebilirsiniz. 20+ yıllık deneyimli
              ekibimiz, size en uygun çözümleri sunmak için hazır bekliyor.
            </p>
            <Link to="categories" smooth={true} duration={500}>
              <button
                className="bg-textPrimary text-xs md:text-base 
            text-black px-4 py-2 rounded-md mt-6"
              >
                Kategorileri Gör
              </button>
            </Link>
            <hr className="hidden md:block  mt-8" />
          </motion.div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Featured;
