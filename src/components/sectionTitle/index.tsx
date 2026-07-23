import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  color?: "textPrimary" | "textSecondary" | "text-white";
  className?: string;
};

const SectionTitle = ({
  title,
  color = "textSecondary",
  className = "",
}: Props) => {
  const colorClass =
    color === "textPrimary"
      ? "text-textPrimary"
      : color === "text-white"
        ? "text-white"
        : "text-textSecondary";

  return (
    <motion.h1
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`md:text-3xl text-xl md:font-semibold text-center my-6 ${colorClass} ${className}`}
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;
