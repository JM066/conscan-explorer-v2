import Tele from "@/assets/icons/telegramIcon.svg";
import Face from "@/assets/icons/facebookIcon.svg";
import Twit from "@/assets/icons/twitterIcon.svg";
import Kack from "@/assets/icons/kakaoIcon.svg";
import Git from "@/assets/icons/githubIcon.svg";
import Disc from "@/assets/icons/discordIcon.svg";

export const PAGES_HEADER = [
  {
    id: "main",
    name: "Main",
    path: "/",
  },
  {
    id: "smart-contract",
    name: "Smart Contracts",
    path: "/smart-contracts",
  },
  {
    id: "docs",
    name: "Docs",
    path: "/docs",
  },
];

export const PAGES_FOOTER = [
  {
    id: "telegram",
    icon: <Tele />,
    path: "https://t.me/conun_global",
  },
  {
    id: "facebook",
    icon: <Face />,
    path: "https://www.facebook.com/conunglobal",
  },
  {
    id: "twitter",
    icon: <Twit />,
    path: "https://twitter.com/conunglobal",
  },
  {
    id: "kakao",
    icon: <Kack />,
    path: "https://open.kakao.com/o/gCsycmhb",
  },
  {
    id: "github",
    icon: <Git />,
    path: "https://github.com/CONUN-Global/CONUN",
  },
  {
    id: "discord",
    icon: <Disc />,
    path: "https://discord.gg/VvXvQfa3Za",
  },
];

export const SECTIONS = {
  company: [
    {
      id: "about-us",
      name: "About Us",
      path: "https://conun.io/#overview",
    },
    {
      id: "contact-us",
      name: "Contact Us",
      path: "https://conun.io/contactus",
    },
    {
      id: "terms-of-service",
      name: "Terms of Service",
      path: "https://conun.io/policy/termsandcondition",
    },
  ],
  community: [
    {
      id: "main-site",
      name: "Main Site",
      path: "https://conun.io/",
    },
    {
      id: "discord",
      name: "Discord",
      path: "https://discord.gg/VvXvQfa3Za/",
    },
  ],
};
