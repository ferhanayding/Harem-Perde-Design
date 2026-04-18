import { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import HamburgerMenuList from "./hamburgerMenu";
import HamburgerMenu from "../icons/HamburgerMenu";
const Header = () => {
  const { t, i18n } = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState("az");

  const items = [
    { name: t("home"), link: "home" },
    { name: t("about"), link: "about" },
    { name: t("references"), link: "refarance" },
    { name: t("products"), link: "products" },
  ];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const changeLang = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E4E0C7]/80 backdrop-blur-md border-b border-[#d6d1b5]">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-10 h-16">

        {/* LOGO */}
        <ScrollLink to="home" smooth duration={600}>
          <img src="/logo/textlogo.png" className="w-28 cursor-pointer" />
        </ScrollLink>

        {/* MENU */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide text-[#181818] font-medium">
          {items.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.link}
              smooth
              duration={600}
              className="cursor-pointer hover:text-black transition duration-300"
            >
              {item.name}
            </ScrollLink>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* LANGUAGE */}
          <select
            value={lang}
            onChange={changeLang}
            className="bg-transparent border border-[#cfc9ab] rounded-md px-3 py-1 text-xs text-[#3a3a3a]"
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="az">AZ</option>
          </select>

          {/* CTA */}
          <ScrollLink to="refarance" smooth duration={600}>
            <button className="hidden md:block bg-black text-white text-xs px-4 py-2 rounded-md hover:bg-[#333] transition">
              {t("referenceButton")}
            </button>
          </ScrollLink>

          {/* MOBILE */}
          <div className="md:hidden relative" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <HamburgerMenu className="w-6 h-6 fill-[#3a3a3a]" />
            </button>

            {menuOpen && (
              <HamburgerMenuList
                setHamburgerMenu={setMenuOpen}
                headerItems={items}
              />
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;