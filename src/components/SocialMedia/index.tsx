import React from "react";
import Instagram from "../icons/Instagram";
import Whatsapp from "../icons/Whatsapp";
import Link from "next/link";
type Props = {};
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
];
const SocialMedia = (props: Props) => {
  return (
    <div className=" fixed grid gap-3 top-1/2 right-0 text-white bg-black px-2 py-5 rounded-l-2xl z-[50] ">
      {SocialMedias.map((socialMedia) => (
        <Link
          key={socialMedia.name}
          className="hover:scale-105 transition-all duration-150 "
          href={socialMedia.link}
          target="_blank"
        >
          {socialMedia.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
