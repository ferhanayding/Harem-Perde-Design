import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type HeaderItem = {
  name: string;
  link: string;
};

type Props = {
  headerItems: HeaderItem[];
  setHamburgerMenu: (value: boolean) => void;
};

const HamburgerMenuList = (props: Props) => {
  const { pathname } = useRouter();

  const handleItemClick = (link: string) => {
    props.setHamburgerMenu(false);

    requestAnimationFrame(() => {
      const section = document.getElementById(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="absolute left-[-20px] top-[51px] w-64 overflow-hidden  border border-black/10 
      bg-white shadow-2xl z-50"
    >
      <ul className="flex flex-col">
        {props.headerItems?.map((item, index) => (
          <React.Fragment key={`${item.link}-${index}`}>
            <li>
              <button
                type="button"
                onClick={() => handleItemClick(item.link)}
                className={`flex w-full items-center justify-between px-5 py-4 text-left 
                  text-sm font-semibold tracking-wide transition ${pathname === item.link ? "text-black bg-primary" : "text-black/80 hover:bg-black/5 hover:text-black"}`}
              >
                <span>{item?.name || item.link}</span>
                <span className="text-base text-black/40">›</span>
              </button>
            </li>

            {index !== props.headerItems.length - 1 && (
              <div className="mx-4 h-[1px] bg-black/10"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </motion.div>
  );
};

export default HamburgerMenuList;