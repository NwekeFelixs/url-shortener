import React from "react";
import bgDesktop from "../images/bg-boost-desktop.svg";
import bgMobile from "../images/bg-boost-mobile.svg";

function Boost() {
  return (
    <>
      <section className="boost relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="bgmobile" />
        </picture>

        <div className="flex items-center justify-center flex-col inner-text">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">Boost your links today</h2>
          <button className="cta-btn rounded-full">Get Started</button>
        </div>
      </section>
    </>
  );
}

export default Boost;
