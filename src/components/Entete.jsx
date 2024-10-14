/**
 * @copyright 2024 Aubry Nobel Niyonkuru
 * @license Apache-2.0
 */
import Logo from "../assets/logo_ann.jpg";
import Navbar from "./Navbar";
import { useState } from "react";
const Entete = () => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="http://" className="logo">
            <img src={Logo} width={60} height={60} alt="Aubry Nobel" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contactez-moi
        </a>
      </div>
    </header>
  );
};

export default Entete;
