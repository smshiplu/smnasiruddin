import { useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ScrollButton } from "./components/ScrollButton";
import { ParticleAnimation } from "./components/ParticleAnimation";

export const HeaderSection = () => {
  const headerSecRef = useRef(null);
  return (
    <header ref={headerSecRef} className="hero h-screen flex flex-col justify-between p-4 scroll-smooth relative bg-slate-900 text-white">
      <Nav/>
      <Hero />
      <ScrollButton forwardedRef={headerSecRef} />
      <ParticleAnimation />
    </header>
  )
}