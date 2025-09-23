import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModals/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

     <div className="hero-layout flex flex-col-reverse xl:flex-row items-center xl:items-center justify-between w-full pt-32 xl:pt-40 px-5 md:px-20">
  {/* LEFT: Hero Text */}
  <header className="flex flex-col justify-center w-full xl:w-1/2 gap-7">
    <div className="hero-text">
      <h1>
        Shaping
        <span className="slide">
          <span className="wrapper">
            {words.map((word, index) => (
              <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                <img
                  src={word.imgPath}
                  alt="person"
                  className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white-50"
                />
                <span>{word.text}</span>
              </span>
            ))}
          </span>
        </span>
      </h1>
      <h1>into Real Projects</h1>
      <h1>that Deliver Results</h1>
    </div>

    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
      Hi, I’m Yash, Aspiring Computer Programmer | Passionate About Coding & Technology
    </p>

    <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12 mt-5" id="counter"/>
  </header>

  {/* RIGHT: 3D Model */}
  <figure className="w-full xl:w-1/2 flex justify-center xl:justify-end items-center mb-10 xl:mb-0">
    <div className="hero-3d-layout w-full md:w-[80%] xl:w-[90%] h-[50vh] md:h-[60vh] xl:h-[80vh]">
      <HeroExperience />
    </div>
  </figure>
</div>

    <div className="mt-20">
      <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;