import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ParticleAnimation } from "./components/ParticleAnimation";
import { ScrollButton } from "./components/ScrollButton";

export const HeaderSection = () => {
  
  const headerSecRef = useRef(null);
  useEffect(() => {
    //https://css-tricks.com/the-trick-to-viewport-units-on-mobile
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []); //eslint-disable-line

  return (
    <header 
      ref={headerSecRef} 
      style={{ height: "100vh", height: "calc(var(--vh, 1vh) * 100)"}} //eslint-disable-line
      className="header flex flex-col justify-between p-4 scroll-smooth relative bg-slate-900 text-white h-dvh">
      <Nav/>
      <Hero />
      <ScrollButton forwardedRef={headerSecRef} />
      <ParticleAnimation />
    </header>
  )
}