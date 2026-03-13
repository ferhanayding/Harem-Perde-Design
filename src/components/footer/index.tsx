import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-gray-900 relative text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        <div className="flex items-center gap-4">
          <img
            src="/logo/mainlogo.png"
            alt="AYTEKS MMC Logo"
            className="h-24"
          />
          <span className="text-2xl font-bold">AYTEKS MMC</span>
        </div>
        <div className="text-start">
          <p className="text-lg mb-2">
            Akademik Həsən Əliyev küçəsi, 26 Bakü, Azerbaycan
          </p>
          <p className="text-lg">050 5606173</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>{t("footer")} </p>
      </div>
    </div>
  );
};

export default Footer;
