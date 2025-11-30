import React from "react";

function Hero() {
  return (
    <div className="pb-4">
      <div class="heroimage  bg-black text-white flex flex-wrap lg:flex-nowrap items-center justify-center">
        <div class="hero-image__photo items-center h-130 w-1/2 p-10 overflow-hidden">
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/Pro-tips-application-journey%3Arad-3x2?ts=1755117193951&amp;fit=constrain&amp;dpr=off"
            loading="lazy"
            alt="Hero"
          />
        </div>

        <div class="lg:p-16 w-1/2 flex flex-col justify-center">
          <h1 class="font-sans font-bold text-7xl">Careers blog</h1>

          <h2 class="font-serif text-1xl mt-4">
            “Growth happens when your curiosity becomes stronger than your comfort zone.”
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
