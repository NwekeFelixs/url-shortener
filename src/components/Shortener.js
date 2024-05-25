import React from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";


function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);
  const [buttonText, setButtonText] = useState("Copy")
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Put in a Url");
    } else {
      const shortenUrl = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);

        const data = await res.json();

        console.log(data);
        setLinks(data.result);
        setText("");
      };

      shortenUrl();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied!")
  }

  return (
    <>
      <section className="max-width shortener relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="bgmobile" />
        </picture>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              placeholder="Shorten a link here"
              required
              className="w-full py-2 px-5 rounded mb-2 md:mb-0 md-auto"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="ssubmit"
              className="cta-btn rounded-lg w-full md:w-40 md:ml-2"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>

          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5s">
                <button className="text-cyan-500">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button className="cta-btn rounded-lg text-sm flex gap-2 focus:bg-slate-900" onClick={handleCopy}>
                    {buttonText}
                  <IoCopyOutline className="text-xl" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

export default Shortener;
