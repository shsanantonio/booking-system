"use client";
import { useEffect, useState } from "react";
import LangDropdown from "./LangDropdown";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";
import Link from "next/link";

const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <header
      className={`z-30 border-y sticky hidden lg:block top-0 ${
        scrolled &&
        "z-50 shadow-md bg-white bg-opacity-70 backdrop-blur border-0"
      } duration-300`}>
      <div className="container mx-auto flex justify-between py-3 lg:py-5 gap-1">
        <div className="lg:order-2 flex gap-2 items-center">
          <ul className="flex flex-col lg:flex-row menus absolute left-0 lg:top-full bg-white lg:bg-transparent w-full lg:w-auto lg:static px-2 lg:px-0"> 
            <Link href="#"><li className={`relative menu-items cursor-pointer hover:underline`}>Home</li></Link>
            <Link href="#"><li className={`relative menu-items cursor-pointer hover:underline`}>Membership</li></Link>
          </ul> 
          <LangDropdown />
          <NotificationDropdown />
          <ProfileDropdown />
        </div>

        <div className="lg:order-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden border py-1 px-2 rounded-md bg-[var(--btn-bg)]">
            <i className="las la-bars text-2xl"></i>
          </button>
          <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col lg:flex-row menus absolute left-0 lg:top-full bg-white lg:bg-transparent w-full lg:w-auto lg:static px-2 lg:px-0">
            <Image
            src="/img/logo.png"
            className="self-center hidden xl:block"
            width={172}
            height={48}
            alt="logo"
            priority
          />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommonHeader;
