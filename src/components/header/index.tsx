import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../icons/HamburgerMenu";
import { motion } from "framer-motion";
import HamburgerMenuList from "./hamburgerMenu";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

type Props = {};
export type HeaderItem = {
  name: string;
  link: string;
};

const Header: React.FC = (props: Props) => {
  const { pathname } = useRouter();
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("az");
  const { i18n } = useTranslation();
  const { t } = useTranslation("global");

  const handleLanguageChange = (e: any) => {
    setSelectedLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  const HeaderItems: HeaderItem[] = [
    {
      name: t("home"),
      link: "home",
    },
    {
      name: t("about"),
      link: "about",
    },
    {
      name: t("references"),
      link: "refarance",
    },
    {
      name: t("products"),
      link: "products",
    },
  ];
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
      className="w-screen font-medium shadow shadow-black fixed top-0 left-0 
  z-50 bg-primary text-textPrimary  h-16 py-2 md:px-10 px-4
     flex items-center justify-between"
    >
      <div className="flex flex-1 justify-start items-center">
        <div className="hidden md:flex flex-1 justify-start items-center">
          <ScrollLink
            to={"home"}
            smooth={true}
            duration={600}
            className="cursor-pointer"
          >
            <img
              src="logo/textlogo.png"
              alt=""
              className=" w-32 object-contain "
            />
          </ScrollLink>
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
          {hamburgerMenu && (
            <HamburgerMenuList
              setHamburgerMenu={setHamburgerMenu}
              headerItems={HeaderItems}
            />
          )}
        </div>
      </div>
      {/* mobile logo */}
      <div className="md:hidden flex ">
        <ScrollLink
          to={"home"}
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          <img
            src="logo/textlogo.png"
            alt=""
            className=" w-32 object-contain "
          />
        </ScrollLink>
      </div>
      <div className="hidden md:flex flex-[3]  justify-end items-center">
        <ul className="flex items-center gap-14 lg:gap-20">
          {HeaderItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={600}
              className={`${
                pathname === item.link ? "underline" : ""
              } text-[13px] hover:underline cursor-pointer `}
            >
              {item?.name}
            </ScrollLink>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <div className="relative">
          <select
            id="language"
            value={selectedLanguage}
            defaultValue={selectedLanguage}
            onChange={handleLanguageChange}
            className="appearance-none bg-primary text-textPrimary border  w-24 text-sm font-medium
            border-textPrimary rounded-md py-[6px] pl-3 pr-10 focus:outline-none focus:ring-1
             focus:ring-bgPrimary transition duration-300 ease-in-out  "
          >
            <option value="tr">TR</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="az">AZ</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-textPrimary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
