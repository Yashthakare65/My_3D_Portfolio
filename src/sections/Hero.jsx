import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModals/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      {
      y: 50,
      opacity: 0,
    },{
      y:0,
      opacity:1,
      stagger:0.2,
      duration:1,
      ease:'power2.inOut'

    });
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

 <div className="hero-layout flex flex-col-reverse xl:flex-row items-center justify-between relative">
  {/* Left: Hero Content */}
  <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5">
    <div className="flex flex-col gap-7">
      <div className="hero-text">
        <h1>
          Shaping
          <span className="slide">
            <span className="wrapper">
              {words.map((word, index) => (
                <span key={index} className="flex items-center gap-2 pb-2">
                  <img
                    src={word.imgPath}
                    alt="person"
                    className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-white-50 p-1"
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

      <p className="text-white-50 text-sm md:text-base relative z-10">
        Hi, I’m Yash, Aspiring Computer Programmer | Passionate About Coding & Technology | Dedicated to Learning, Building, and Exploring Innovative Solutions | Seeking Opportunities to Grow and Contribute
      </p>

      <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
    </div>
  </header>

  {/* Right: 3D Model */}
  <figure className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
    <div className="hero-3d-layout">
      <HeroExperience />
    </div>
  </figure>
</div>

      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
