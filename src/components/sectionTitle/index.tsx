import React from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
  color?: string;
};

const SectionTitle = ({
  title,
  color = "textSecondary",
}: // underline = true,
Props) => {
  return (
    <motion.h1
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-3xl font-medium text-center my-4 text-${color} 
  underline md:mt-10 md:mb-5`}
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;
