import {useEffect, useState} from "react";
import { SocialIcons } from "../Others/SocialIcons";
import ScrollToTop from "./components/ScrollToTop";

export const FooterSection = () => {
  const [year, setYear] = useState(null);
  useEffect(() => {
    const dt = new Date();
    setYear(dt.getFullYear());
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const className = {
    ul: "flex items-center gap-6 mt-6",
    icon: "w-3 h-3 hover:scale-105 text-sky-800 hover:text-gray-800 dark:hover:text-white"
  }

  return (
    <footer className="max-w-screen-xl mx-auto w-full relative p-4 pt-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden flex flex-col items-center justify-center gap-2">
      <p className="text-xs text-sky-800">SM Nasir Uddin © {year}</p>
      <button onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16" viewBox="0 0 573.178 478.468" >
          <g id="Layer_1">
            <path fill="none" stroke="#113b71" strokeWidth="24" strokeLinejoin="round" d="M109.354,468.468c0,0,6.733-1.858,6.733-6.965
              c0-5.107,0.464-162.495,0.464-162.495l106.784-184.316h87.281v201.032c0,0,1.161,1.626,3.714,1.626c2.552,0,11.374,0,11.374,0
              l89.607-151.123l0.233-150.192c0,0-0.934-6.033-8.822-6.033c-7.895-0.001-242.121,0.232-242.121,0.232s-3.017,0.463-6.963,6.964
              C153.692,23.696,10,272.313,10,272.313l0.463,190.354c0,0,0.695,5.337,8.125,5.337
              C26.019,468.003,109.354,468.468,109.354,468.468z"/>
            <path fill="none" stroke="#113b71" strokeWidth="24" strokeLinejoin="round" d="M463.826,10c0,0-6.734,1.856-6.734,6.964
              c0,5.105-0.461,162.492-0.461,162.492L349.845,363.774h-87.283v-201.03c0,0-1.16-1.625-3.713-1.625s-11.376,0-11.376,0
              l-89.603,151.12l-0.236,150.191c0,0,0.933,6.034,8.827,6.034c7.889,0,242.117-0.233,242.117-0.233s3.014-0.464,6.963-6.962
              c3.946-6.502,147.637-255.119,147.637-255.119l-0.463-190.353c0,0-0.695-5.336-8.127-5.336C547.163,10.464,463.826,10,463.826,10
              z"/>
          </g>
        </svg>
      </button>
      {/* <ScrollToTop /> */}
      <SocialIcons className={className}/>
    </footer>
  )
}