import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import record from "../images/icon-detailed-records.svg";
import customize from "../images/icon-fully-customizable.svg";

function Advanced() {
  return (
    <>
      <section className="bg-gray-100 pt-32 pb-10 lg:pb-40">
        <div className="max-width">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">Advanced Statistics</h2>
          <p className="text-slate-400 text-center mb-10">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>

          <div className="cards relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="line"></div>
            <article className="bg-white p-5 rounded relative">
              <img src={brand} alt="brand"  className="p-3 bg-slate-800 rounded-full -mt-12"/>
              <h3 className='text-slate-800 text-lg mb-2 font-bold mt-5'>Brand Recognition</h3>
              <p className="text-slate-400 text-sm">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img src={record} alt="record" className="p-3 bg-slate-800 rounded-full -mt-12" />
              <h3 className='text-slate-800 text-lg mb-2 font-bold mt-5'>Detailed Record</h3>
              <p className="text-slate-400 text-sm">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img src={customize} alt="cusomize" className="p-3 bg-slate-800 rounded-full -mt-12" />
              <h3 className='text-slate-800 text-lg mb-2 font-bold mt-5'> Fully Customizable</h3>
              <p className="text-slate-400 text-sm">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Advanced;
