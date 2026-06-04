import { FaGithubAlt, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export const SocialIcons = ({ className }) => {
  return (
    <ul className={twMerge(className.ul)}>
      <li>
        <a href="https://www.linkedin.com/in/sm-nasir-uddin" target="_blank" rel="noreferrer"><FaLinkedinIn className={`${twMerge(className.icon)} w-7 h-7 `} /></a>
      </li>
      <li>
        <a href="https://x.com/nasiruddinshipl" target="_blank" rel="noreferrer"><FaXTwitter className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="https://www.instagram.com/nasiruddinshiplu" target="_blank" rel="noreferrer"><FaInstagram className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="mailto:nasiruddinshiplu@gmail.com" target="_blank" rel="noreferrer"><FaRegEnvelope className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="https://github.com/smshiplu" target="_blank" rel="noreferrer"><FaGithubAlt className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
    </ul>
  )
}
