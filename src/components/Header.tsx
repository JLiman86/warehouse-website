import { useState } from "react";

import Logo from "../assets/img/logo.png";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className="relative z-20">
      <div
        data-aos="fade-down"
        data-aos-delay="1200"
        className="container mx-auto"
      >
        <div className="py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-20">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <div className="hidden xl:block">
              <Nav />
            </div>
          </div>
          <button className="btn btn-quaternary flex justify-center items-center gap-4">
            Request Demo <BsArrowRight />
          </button>
          <button
            onClick={() => setNavMobile((prev) => !prev)}
            className="xl:hidden"
          >
            <FaBars />
          </button>
          <div
            className={`${
              navMobile ? "h-[314px]" : "h-[0px]"
            }  xl:hidden z-10 absolute top-full left-0 w-full transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
