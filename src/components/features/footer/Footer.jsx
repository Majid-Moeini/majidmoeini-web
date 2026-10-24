import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import content from "./footerContent.json";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  telegram: RiTelegram2Fill,
  instagram: FaInstagram,
};

export default function Footer() {
  return (
    <footer id="footer" className="scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto flex items-end justify-between px-4 gap-3">
        <p className="whitespace-pre-line text-gray-300 font-modam md:text-5xl text-base font-extralight">
          {content.closingMessage}
        </p>

        <Link
          href={`mailto:${content.email}`}
          className="border border-gray-600 flex h-fit px-2 py-2 rounded-lg items-center gap-3 hover:-translate-y-0.5 duration-300 cursor-pointer md:text-base text-xs"
        >
          <BiLogoGmail className="text-red-500" />
          <span className="md:text-gray-50 md:font-light md:text-base text-xs text-gray-400">
            {content.email}
          </span>
        </Link>
      </div>

      <hr className="my-4 text-gray-600" />
      <div className="text-gray-500 mx-auto flex md:flex-row flex-col-reverse gap-4.5 items-center w-full max-w-5xl justify-between md:mb-6 mb-3 px-4">
        <p className="text-sm">{content.copyright}</p>
        <div className="flex md:gap-3 gap-6">
          {content.socialLinks.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="border p-1.5 rounded-2xl hover:text-gray-700 hover:bg-gray-400 duration-300"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
