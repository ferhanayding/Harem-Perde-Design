import React from "react";
import SectionTitle from "../sectionTitle";
import { worksData } from "./data";
import { Gallery } from "react-grid-gallery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Refarance = () => {
  const { t } = useTranslation("global");

  return (
    <div
      id="refarance"
      className="bg-bgPrimary z-40 relative   text-textPrimary md:px-20 h-full px-6 py-5 pb-24 w-full"
    >
      <SectionTitle title={t("references")} color="textSecondary" />
      <div className="md:mt-16 ">
        {worksData.map((work, index) => (
          <div key={index} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <span className=" p-4 text-textSecondary font-semibold text-sm  md:text-2xl ">
                {work.workName}
              </span>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="hidden md:block"
            >
              <Gallery
                images={work.photos}
                enableImageSelection={false}
                rowHeight={500}
              />
            </motion.div>
            <div className="md:hidden">
              {work.photos.map((curtain, index) => (
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
            {worksData.length - 1 === index ? null : (
              <hr className=" my-5 md:my-10 border-t-2 border-primary" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-primary z-40"></div>
      <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-primary z-40 rotate-1 "></div>
      <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-primary z-40 -rotate-1 "></div>
    </div>
  );
};

export default Refarance;
