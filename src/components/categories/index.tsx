import { categories } from "@/dumyData/category";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Categories = (props: Props) => {
  return (
    <div
      id="categories"
      className="flex md:p-4 md:pt-8 flex-col justify-center items-center"
    >
      <motion.div
        initial={{ x: 100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ x: 0 }}
        className="flex items-center justify-center flex-col "
      >
        <h1
          className="text-3xl font-semibold text-center my-4 text-[#61561b] 
        underline md:mt-10 md:mb-5  w-screen"
        >
          Kategoriler
        </h1>
        <p className="text-lg text-center md:w-1/2 text-[#61561b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eveniet facere aliquam itaque mollitia expedita rem illo enim nam
          quos.
        </p>
      </motion.div>
      <div className="flex flex-wrap gap-3 p-4 justify-center items-start">
        {categories.map((category, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={category.id}
            className="flex items-center cursor-pointer group flex-wrap
             justify-center my-2 relative rounded-lg w-full  md:w-1/3 lg:w-1/4 xl:w-[400px]"
          >
            <div className="overflow-hidden w-full h-[150px]  md:h-[200px] lg:h-[250px] rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute rounded-lg bg-[#00000089] w-full h-full group-hover:scale-[1.02] transition-all duration-500 flex items-center justify-center">
              <span className="text-center text-base md:text-2xl text-textPrimary group-hover:scale-[1.05] transition-all duration-500">
                {category.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
