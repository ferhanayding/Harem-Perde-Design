'use client'

import React, { useEffect, useState } from "react";
import Instagram from "../icons/Instagram";
import Whatsapp from "../icons/Whatsapp";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = () => {

  const [mapLink, setMapLink] = useState("");

  const lat = "40.39869961341967";
  const lng = "49.83360312874319";
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      setMapLink(`geo:${lat},${lng}`);
    } else {
      setMapLink(`https://www.google.com/maps?q=${lat},${lng}`);
    }
  }, []);

  const SocialMedias = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/haremperde_baku/",
      icon: <Instagram width={20} height={20} />,
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=994505606173&text&type=phone_number&app_absent=0",
      icon: <Whatsapp width={20} height={20} />,
    },
    {
      name: "Map",
      link: mapLink,
      icon: <FaMapMarkerAlt size={20} />,
    },
    {
      name: "Phone",
      link: "tel:+994505606173",
      icon: <FaPhone size={16} />,
    },
  ];

  return (
    <div className="fixed grid gap-3 top-1/2 right-0 text-white bg-black px-2 py-5 rounded-l-2xl z-[50]">
      {SocialMedias.map((socialMedia) => (
        <Link
          key={socialMedia.name}
          className="hover:scale-105 transition-all duration-150"
          href={socialMedia.link}
          target={socialMedia.name !== "Phone" ? "_blank" : "_self"}
        >
          {socialMedia.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;