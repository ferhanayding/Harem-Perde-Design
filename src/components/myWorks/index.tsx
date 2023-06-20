import React from "react";
import { Gallery } from "react-grid-gallery";
import { motion } from "framer-motion";
import { curtains } from "./data";
type Props = {};

const MyWorks = (props: Props) => {
  return (
    <div className="w-full min-h-screen md:px-20 px-6 bg-primary text-textPrimary">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="underline text-2xl font-medium my-10 text-center "
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 text-center w-full"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum, deleniti!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="hidden md:block"
      >
        <Gallery
          images={curtains}
          enableImageSelection={false}
          rowHeight={400}
        />
      </motion.div>
      <div className="md:hidden">
        {curtains.map((curtain, index) => (
          <motion.div
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
    </div>
  );
};

export default MyWorks;
