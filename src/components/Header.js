import React, { useState, useEffect } from "react";

import logo from "../images/logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickable = document.querySelectorAll(".clickable");
    clickable.forEach((item) => {
      item.addEventListener("click", () => {
        setIsOpen(!isOpen);
      });
    });

    return () => {
      clickable.forEach((item) => {
        item.removeEventListener("click", () => {
          setIsOpen(!isOpen);
        });
      });
    };
  }, [isOpen]);

  return (
    <>
      <header className="header max-width py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" />

          <nav className="ml-10 desktop-nav" >
            <ul className="flex items-center flex-row">
              <li>
                <button className="clickable text-slate-400">Features</button>
              </li>
              <li className="mx-5">
                <button className="clickable text-slate-400">Pricing</button>
              </li>
              <li>
                <button className="clickable text-slate-400">Resources</button>
              </li>
            </ul>
          </nav>
          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 px-5 lg:hidden">
              <nav>
                <ul className="mb-5">
                  <li>
                    <button className="clickable">Features</button>
                  </li>
                  <li className="py-10">
                    <button className="clickable">Pricing</button>
                  </li>
                  <li>
                    <button className="clickable">Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className="border-t border-slate-500">
                <li className="my-5 md:my-0">
                  <button>Login</button>
                </li>
                <li>
                  <button className="cta-btn rounded-full w-full md:w-max">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          )}
         
        </div>
        <div>
          <ul className="flex items-center gap-5 cta-btns">
            <li>
              <button className="
              text-slate-400">Login</button>
            </li>
            <li>
              <button className="cta-btn rounded-full md:w-max">Sign Up</button>
            </li>
          </ul>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-4xl text-slate-400 tracking-wide lg:hidden"
          >
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
      </header>
    </>
  );
}

export default Header;
