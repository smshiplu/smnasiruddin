import { useEffect, useRef, useState } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { BsFillSunFill } from "react-icons/bs";

export const Nav = () => {
  const navRef = useRef(null);
  const dm = JSON.parse(localStorage.getItem("nasirUddinPortfolio-darkMode"));
  const [darkModeToggle, setDarkModeToggle] = useState(dm !== null || dm!== undefined ? dm : true);
  
  useEffect(() => {
    if(darkModeToggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkModeToggle])
  
  const handleDarkMode = () => {
    if(darkModeToggle) {
      setDarkModeToggle(false);
      localStorage.setItem("nasirUddinPortfolio-darkMode", JSON.stringify(false));
      
    } else {
      setDarkModeToggle(true);
      localStorage.setItem("nasirUddinPortfolio-darkMode", JSON.stringify(true));
    }
  }


  return (
    <nav ref={navRef} className="top max-w-screen-xl mx-auto w-full pointer-events-none z-10">
      <div className="flex items-center justify-between w-full">
        <a href="/" className="logo flex items-center space-x-3 rtl:space-x-reverse pointer-events-auto">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10    text-white hover:text-gray-300" viewBox="0 0 573.178 478.468" >
            <g id="Layer_1">
              <path fill="none" stroke="currentColor" strokeWidth="24" strokeLinejoin="round" d="M109.354,468.468c0,0,6.733-1.858,6.733-6.965
                c0-5.107,0.464-162.495,0.464-162.495l106.784-184.316h87.281v201.032c0,0,1.161,1.626,3.714,1.626c2.552,0,11.374,0,11.374,0
                l89.607-151.123l0.233-150.192c0,0-0.934-6.033-8.822-6.033c-7.895-0.001-242.121,0.232-242.121,0.232s-3.017,0.463-6.963,6.964
                C153.692,23.696,10,272.313,10,272.313l0.463,190.354c0,0,0.695,5.337,8.125,5.337
                C26.019,468.003,109.354,468.468,109.354,468.468z"/>
              <path fill="none" stroke="currentColor" strokeWidth="24" strokeLinejoin="round" d="M463.826,10c0,0-6.734,1.856-6.734,6.964
                c0,5.105-0.461,162.492-0.461,162.492L349.845,363.774h-87.283v-201.03c0,0-1.16-1.625-3.713-1.625s-11.376,0-11.376,0
                l-89.603,151.12l-0.236,150.191c0,0,0.933,6.034,8.827,6.034c7.889,0,242.117-0.233,242.117-0.233s3.014-0.464,6.963-6.962
                c3.946-6.502,147.637-255.119,147.637-255.119l-0.463-190.353c0,0-0.695-5.336-8.127-5.336C547.163,10.464,463.826,10,463.826,10
                z"/>
            </g>
          </svg>
        </a>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button> */}
        {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
        <div>
          <ul className="font-medium flex flex-col mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              {darkModeToggle ? ( <button onClick={handleDarkMode} className='pointer-events-auto'>
                <BsFillSunFill className="w-6 h-6 text-gray-300 hover:text-white" />
              </button>) : ( <button onClick={handleDarkMode} className='pointer-events-auto'>
                <FaRegMoon className="w-6 h-6 text-gray-300 hover:text-white" />
              </button>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
