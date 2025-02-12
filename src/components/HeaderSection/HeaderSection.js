import { useEffect, useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ScrollButton } from "./components/ScrollButton";
import { ParticleAnimation } from "./components/ParticleAnimation";

export const HeaderSection = () => {
  const headerSecRef = useRef(null);
  useEffect(() => {
    // https://stackoverflow.com/questions/61308575/tailwind-h-screen-doesn-t-work-properly-on-mobile-devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []); //eslint-disable-line

  return (
    <header 
      ref={headerSecRef} 
      style={{height: "100vh", height: "calc(var(--vh, 1vh) * 100)"}}
      className="hero flex flex-col justify-between p-4 scroll-smooth relative bg-slate-900 text-white">
      <Nav/>
      <Hero />
      <ScrollButton forwardedRef={headerSecRef} />
      <ParticleAnimation />
    </header>
  )
}