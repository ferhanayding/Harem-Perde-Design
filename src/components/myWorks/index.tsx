import React from "react";
import { Gallery } from "react-grid-gallery";
import { motion } from "framer-motion";
import { curtains } from "./data";
import SectionTitle from "../sectionTitle";
import { useTranslation } from "react-i18next";
type Props = {};

const MyWorks = (props: Props) => {
  const { t } = useTranslation("global");

  return (
    <div
      id="products"
      className="w-full md:pb-14 pb-10 z-40 min-h-screen md:px-20 px-6 relative bg-primary text-textPrimary"
    >
      <div>
        <SectionTitle title={t("products")} color="textPrimary" />
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 text-center w-full"
        >
          {t("productsDesc")}
        </motion.p>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="hidden md:block"
      >
        <Gallery
          images={curtains}
          enableImageSelection={false}
          rowHeight={300}
        />
      </motion.div>
      <div className="md:hidden">
        {curtains.map((curtain, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={curtain.src}
            className="w-full h-full mb-5"
          >
            <img
              src={curtain?.src}
              alt={"curtain"}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-bgPrimary z-40"></div>
      <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-bgPrimary z-40 rotate-1 "></div>
      <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-bgPrimary z-40 -rotate-1 "></div>
    </div>
  );
};

export default MyWorks;
