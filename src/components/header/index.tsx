import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../icons/HamburgerMenu";
import HamburgerMenuList from "./hamburgerMenu";
import { Link as ScrollLinkBase } from "react-scroll";
import { useTranslation } from "react-i18next";

export type HeaderItem = {
  name: string;
  link: string;
};

const ScrollLink = ScrollLinkBase as unknown as React.ComponentType<{
  to: string;
  smooth?: boolean;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}>;

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // Scroll durumunu tutacağımız state
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { i18n, t } = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("az");

  useEffect(() => {
    // 1. Dil ayarlarını yükleme ve Dışarı Tıklama (Click Outside) dinleyicisi
    const savedLang = localStorage.getItem("language");
    if (savedLang) setSelectedLanguage(savedLang);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setHamburgerMenu(false);
      }
    };

    // 2. Scroll dinleyicisi (Aşağı kaydırınca true, en üstte false olacak)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  const HeaderItems: HeaderItem[] = [
    { name: t("home"), link: "home" },
    { name: t("about"), link: "about" },
    { name: t("references"), link: "refarance" },
    { name: t("products"), link: "products" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md text-black h-16 py-2 md:px-10 px-4 flex items-center justify-between ${isScrolled
        ? "bg-bgPrimary shadow-md border-b border-black/5"
        : "bg-white/90 border-b border-transparent shadow-none "
        }`}
    >
      {/* SOL KISIM: Mobil Hamburger Menü & Masaüstü Logo */}
      <div className="flex flex-1 justify-start items-center">
        {/* Desktop Logo (Sadece md ve üzeri ekranlarda görünür) */}
        <div className="hidden md:flex items-center">
          <ScrollLink to="home" smooth={true} duration={600} className="cursor-pointer">
            <Image

              src="/logo/textlogo.png"
              alt="Logo"
              width={128}
              height={40}
              className="object-contain"
              priority
            />
          </ScrollLink>
        </div>

        {/* Mobile Hamburger Menu (Sadece mobilde görünür) */}
        <div className="md:hidden flex relative" ref={hamburgerRef}>
          <button
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
            className="p-1 hover:bg-black/5 rounded-md transition-colors"
          >
            <HamburgerMenu height={30} width={30} className="fill-black" />
          </button>
          {hamburgerMenu && (
            <HamburgerMenuList
              setHamburgerMenu={setHamburgerMenu}
              headerItems={HeaderItems}
            />
          )}
        </div>
      </div>

      <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <ScrollLink to="home" smooth={true} duration={600} className="cursor-pointer">
          <Image
            src="/logo/textlogo.png"
            alt="Logo"
            width={110}
            height={35}
            className="object-contain"
            priority
          />
        </ScrollLink>
      </div>

      {/* SAĞ KISIM: Masaüstü Linkler & Dil Seçimi */}
      <div className="flex flex-1 justify-end items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center mr-8">
          <ul className="flex items-center gap-8 lg:gap-14">
            {HeaderItems.map((item, index) => {
              const isActive = pathname === item.link;
              return (
                <ScrollLink
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={600}
                  className="relative group text-sm font-semibold tracking-wide cursor-pointer py-2 text-primary hover:text-black transition-colors"
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </ScrollLink>
              );
            })}
          </ul>
        </div>

        {/* Language Selector (Hem mobil hem masaüstünde sağda) */}
        <div className="relative group">
          <select
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="appearance-none bg-transparent hover:bg-black/5 text-black border border-black/20 rounded-lg py-1.5 pl-3 pr-8 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 ease-in-out text-sm font-semibold cursor-pointer"
          >
            <option value="tr" className="bg-white text-black">TR</option>
            <option value="ru" className="bg-white text-black">RU</option>
            <option value="en" className="bg-white text-black">EN</option>
            <option value="az" className="bg-white text-black">AZ</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-black/50 group-hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;