import { FaLinkedinIn, FaXTwitter, FaInstagram, FaRegEnvelope, FaGithubAlt } from "react-icons/fa6";
import {twMerge} from "tailwind-merge";

export const SocialIcons = ({ className }) => {
  return (
    <ul className={twMerge(className.ul)}>
      <li>
        <a href="/" target="_blank"><FaLinkedinIn className={`${twMerge(className.icon)} w-7 h-7 `} /></a>
      </li>
      <li>
        <a href="/" target="_blank"><FaXTwitter className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="/" target="_blank"><FaInstagram className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="/" target="_blank"><FaRegEnvelope className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
      <li>
        <a href="https://github.com/smshiplu" target="_blank"><FaGithubAlt className={`${twMerge(className.icon)} w-7 h-7 `}/></a>
      </li>
    </ul>
  )
}
