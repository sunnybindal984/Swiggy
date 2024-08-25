import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import Category from "./Category";

function Header() {
  const [toggle, setToogle] = useState(false);
  const showSideMenu = () => {
    return setToogle(true);
  };
  const hideSideMenu = () => {
    return setToogle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
    },
    { icon: "", name: "Help" },
    { icon: "", name: "SignIn" },
    { icon: "", name: "Cart", sup: "(0)" },
  ];

  return (
    <>
      <div
        className="w-full h-full fixed duration-500  bg-overlay"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[450px] h-full z-[100] duration-[400ms] absolute  bg-white"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] sticky top-0 bg-white z-[90] shadow-2xl text-[#686b78] ">
        <div className="max-w-[1200px]  mx-auto flex items-center">
          <div className="w-[70px]">
            <img src="images/logo.png" className="w-[80px] h-[45px] " alt="" />
          </div>
          <div className="  text-[17px]">
            {"  "}
            <span className="font-bold border-b-[2px] border-[black]">
              sanjay
            </span>{" "}
            colony faridabad , India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className=" text-[0.9rem] cursor-pointer  text-[#fc8019] inline"
            />
          </div>

          <nav className="flex list-none gap-[50px] ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <li
                  className="flex items-center gap-3 cursor-pointer"
                  key={index}
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
