import React from "react";
import SectionTitle from "../sectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
type Props = {};
type Step = {
  id: number;
  title: string;
};

const Services = (props: Props) => {
  const { t } = useTranslation("global");
  const servicesSteps: Step[] = [
    {
      id: 1,
      title: t("hdw1"),
    },
    {
      id: 2,
      title: t("hdw2"),
    },
    {
      id: 3,
      title: t("hwd3"),
    },
    {
      id: 4,
      title: t("hdw4"),
    },
  ];
  return (
    <div className="bg-bgPrimary z-40 relative  text-textSecondary md:px-20 h-full px-6 py-5 pb-24 w-full">
      <SectionTitle title={t("howDoWork")} color="textSecondary" />

      <div className="md:grid hidden gap-14">
        {servicesSteps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.3, delay: step.id * 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={step.id}
            className="border-b-2  border-textSecondary w-3/5 
                pb-4 flex gap-2 items-center md:m-0 "
            style={{ marginLeft: step.id % 2 === 0 ? "auto" : "0" }}
          >
            <div
              className=" border-2  border-textSecondary flex items-center justify-center
              rounded-full min-w-[40px] min-h-[40px]"
            >
              <span className="text-lg font-bold">{step.id}</span>
            </div>
            <p className="md:text-lg md:font-bold">{step.title}</p>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden grid gap-14">
        {servicesSteps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, x: step.id % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.3, delay: index * 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={step.id}
            className="border-b-2  border-textSecondary w-full 
                pb-4 flex gap-5 flex-col items-center md:m-0 "
          >
            <div
              className=" border-2  border-textSecondary flex items-center justify-center
              rounded-full min-w-[40px] min-h-[40px]"
            >
              <span className="text-lg font-semibold">{step.id}</span>
            </div>
            <p className="text-center">{step.title}</p>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-gray-900 z-40"></div>
      <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-gray-900 z-40 rotate-1 "></div>
      <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-gray-900 z-40 -rotate-1 "></div>
    </div>
  );
};

export default Services;
