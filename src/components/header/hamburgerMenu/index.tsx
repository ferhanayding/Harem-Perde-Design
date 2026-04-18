import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  headerItems: any[];
  setHamburgerMenu: (value: boolean) => void;
};

const HamburgerMenuList = (props: Props) => {
  const { pathname } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="absolute right-[-20px] top-[46px] w-64 h-screen 
      shadow-2xl bg-[#E4E0C7]/95 backdrop-blur-md 
      border border-[#d6d1b5] z-50
      rounded-bl-2xl rounded-tl-2xl rounded-tr-none"
    >
      <ul className="flex flex-col py-6">
        {props.headerItems.map((item, index) => (
          <React.Fragment key={index}>
            <ScrollLink
              to={item.link}
              onClick={() => props.setHamburgerMenu(false)}
              smooth={true}
              duration={600}
              className={`px-6 py-4 text-base font-semibold tracking-wide cursor-pointer transition
                ${pathname === item.link
                  ? "text-black"
                  : "text-[#3a3a3a]"
                }
                hover:bg-black hover:text-white`}
            >
              {item?.name}
            </ScrollLink>

            {/* Divider */}
            {index !== props.headerItems.length - 1 && (
              <div className="mx-6 h-[1px] bg-[#d6d1b5] opacity-70"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </motion.div>
  );
};

export default HamburgerMenuList;