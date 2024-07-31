import Button from "./button";
import { FaLinkedinIn, FaInstagram, FaStackOverflow } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <GrGithub className="w-4 h-4" />,
    link: "https://github.com/ImRealRage",
    username: "ImRealRage",
  },
  {
    icon: <FaStackOverflow className="w-5 h-5" />,
    link: "https://stackoverflow.com/users/25891073/rage",
    username: "Rage",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/kanishk-shukla/",
    username: "Kanishk Shukla",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/imrealrage/",
    username: "imrealrage",
  },
];
