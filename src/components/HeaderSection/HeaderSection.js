import { useEffect, useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ScrollButton } from "./components/ScrollButton";
import { ParticleAnimation } from "./components/ParticleAnimation";

export const HeaderSection = () => {
  const headerSecRef = useRef(null);
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
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