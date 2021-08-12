import tele from "@/assets/icons/telegramIcon.png";
import face from "@/assets/icons/facebookIcon.png";
import twit from "@/assets/icons/twitterIcon.png";
import kack from "@/assets/icons/kakaoIcon.png";
import git from "@/assets/icons/githubIcon.png";
import disc from "@/assets/icons/discordIcon.png";

export const PAGES_HEADER = [
  {
    id: "main",
    name: "Main",
    path: "/main",
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
    icon: tele,
    path: "https://t.me/conun_global",
  },
  {
    id: "facebook",
    icon: face,
    path: "https://www.facebook.com/conunglobal",
  },
  {
    id: "twitter",
    icon: twit,
    path: "https://twitter.com/conunglobal",
  },
  {
    id: "kakao",
    icon: kack,
    path: "https://open.kakao.com/o/gCsycmhb",
  },
  {
    id: "github",
    icon: git,
    path: "https://github.com/CONUN-Global/CONUN",
  },
  {
    id: "discord",
    icon: disc,
    path: "https://discord.gg/VvXvQfa3Za",
  },
];

export const SECTIONS = {
  company: [
    {
      id: "about-us",
      name: "About Us",
      path: "https://discord.gg/VvXvQfa3Za",
    },
    {
      id: "contact-us",
      name: "Contact Us",
      path: "https://discord.gg/VvXvQfa3Za",
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
