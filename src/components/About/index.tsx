import React from "react";
import SectionTitle from "../sectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <div id="about" className="md:px-20 px-6 pb-10 z-40 bg-bgPrimary w-full">
      <SectionTitle title={t("about")} />
      <div className="flex flex-col md:flex-row gap-8 md:pt-10 text-textSecondary">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex gap-5 font-semibold flex-1 text-2xl"
        >
          <img
            src="/images/gallery/sağdan.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </motion.div>
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 font-medium md:text-xl text-base md:my-auto text-center md:text-left leading-9"
        >
          <p>{t("aboutDesc1")}</p>
          <br />
          <p>{t("aboutDesc2")}</p>
          <br />
          <p>{t("aboutDesc3")}</p>
          <br />
          <p>{t("aboutDesc4")}</p>
        </motion.span>
      </div>
    </div>
  );
};

export default About;
