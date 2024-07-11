import React from "react";

const Footer = () => {
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
            H. Cavid prospekti, 528. Mehelle, Politexnik Universiteti ile üz be
            üz.
          </p>
          <p className="text-lg">Tel: 012 5107439 / 050 5606173</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>© 2005 AYTEKS MMC. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default Footer;
