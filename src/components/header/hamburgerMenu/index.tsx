import React from "react";
import { motion } from "framer-motion";
import { HeaderItem } from "..";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  headerItems: HeaderItem[];
};

const HamburgerMenuList = (props: Props) => {
  const { pathname } = useRouter();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ x: -100, opacity: 1, duration: 1 }}
      className="absolute top-[47px]  left-[-16px]  py-2 px-9 
 border  border-transparent text-textPrimary  bg-primary bg-opacity-80"
    >
      <ul className="flex flex-col gap-4">
        {props.headerItems.map((item, index) => (
          <Link key={index} href={item?.link}>
            <li
              className={`${
                pathname === item.link ? "underline" : ""
              } text-[18px] hover:underline list-disc `}
            >
              {item?.name}
            </li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default HamburgerMenuList;
