import React from "react";

import showCase from "../images/illustration-working.svg";

function Showcase() {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="text-slate-800 text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              More than just shorter links
            </h1>
            <p className="text-slate-400 lg:text-lg mb-10">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>

            <button className="cta-btn rounded-full"> Get Started</button>
          </article>

          <article>
            <img src={showCase} alt="showcase" />
          </article>
        </div>
      </section>
    </>
  );
}

export default Showcase;
