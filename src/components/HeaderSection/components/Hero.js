import { useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaRegEnvelope, FaGithubAlt, FaArrowRightLong } from "react-icons/fa6";
import { Modal } from "./Modal";
import { SocialIcons } from "../../Others/SocialIcons";


export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const className = {
    ul: "absolute top-1/2 -translate-y-1/2 right-0 space-y-6 pointer-events-auto z-10",
    icon: "text-gray-300 hover:text-white"
  }

  return (
    <div className='middle hero relative pointer-events-none'>
      <div className='max-w-screen-xl mx-auto w-full relative'>
        <div className='flex flex-col gap-4 z-30 relative xs:ml-0 sm:ml-6 md:ml-10'>
          <h1 className='text-4xl md:text-7xl font-headingFont mt-10'>Nasir Uddin</h1>
          <small className='text-lg font-serif italic'>MERN Stack Developer</small>
          <button onClick={ e => setIsOpen(true)} className="w-28 md:w-32 text-xs sm:text-sm  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-600 to-blue-800 group-hover:from-sky-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 after:content-['\2192'] after:text-4xl after:text-white after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[100px] sm:after:left-24 md:after:left-28 after:flex after:items-center after:justify-center after:-mt-1 hover:scale-105 after:hover:ml-4 md:after:hover:ml-6 after:transition-all after:ease-in-out after:duration-75 pointer-events-auto">
            <span className="relative w-full px-3 md:px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 text-white rounded-md group-hover:bg-opacity-0">
            About Me
            </span>
          </button>
        </div>
        <img className='w-36 sm:w-52 md:w-60 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' src="./assets/logo-gradient.svg" alt="Logo" />
      </div>
      <SocialIcons className={className} />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}
