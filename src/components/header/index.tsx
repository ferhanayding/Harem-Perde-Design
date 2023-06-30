import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../icons/HamburgerMenu";
import { motion } from "framer-motion";
import HamburgerMenuList from "./hamburgerMenu";

type Props = {};
export type HeaderItem = {
  name: string;
  link: string;
};
const HeaderItems: HeaderItem[] = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];
const Header: React.FC = (props: Props) => {
  const { pathname } = useRouter();
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setHamburgerMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="w-screen font-medium fixed top-0 left-0 
  z-50 bg-primary text-textPrimary  h-16 py-2 md:px-10 px-4
     flex items-center justify-between"
    >
      <div className="flex flex-1 justify-start items-center">
        <div className="hidden md:flex flex-1 justify-start items-center">
          Logo
        </div>
        {/* mobile hamburger menu */}
        <div className="md:hidden flex relative" ref={hamburgerRef}>
          <button onClick={() => setHamburgerMenu(!hamburgerMenu)}>
            <HamburgerMenu
              height={30}
              width={30}
              className="fill-textPrimary"
            />
          </button>
          {hamburgerMenu && <HamburgerMenuList headerItems={HeaderItems} />}
        </div>
      </div>
      {/* mobile logo */}
      <div className="md:hidden flex ">Logo</div>
      <div className="hidden md:flex flex-[3]  justify-end items-center">
        <ul className="flex items-center gap-14 lg:gap-20">
          {HeaderItems.map((item, index) => (
            <Link key={index} href={item?.link}>
              <li
                className={`${
                  pathname === item.link ? "underline" : ""
                } text-[18px] hover:underline`}
              >
                {item?.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 justify-end items-center ">Dil</div>
    </nav>
  );
};

export default Header;
