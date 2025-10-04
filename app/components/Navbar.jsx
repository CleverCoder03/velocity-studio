"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "About", href: "#about" },
  { id: 3, link: "Service", href: "#service" },
  { id: 4, link: "Portfolio", href: "#portfolio" },
  { id: 5, link: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState();

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [toggle]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-20 text-white bg-black lg:bg-transparent lg:mix-blend-difference">
        <nav className="flex w-full justify-between items-center px-6 py-4 lg:px-10">
          <div className="font-inter font-semibold text-2xl lg:text-3xl">
            <Link href="#">Velocity</Link>
          </div>
          <div className="hidden lg:flex gap-5 text-xl font-semibold">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.link}
              </Link>
            ))}
          </div>
          <div
            className="font-inter font-semibold text-lg cursor-pointer lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Close" : "Menu"}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-[15] h-dvh w-dvw bg-black"
          >
            <div className="h-full w-full flex flex-col justify-end px-6 pb-10">
              <div className="text-white flex flex-col font-inter text-5xl gap-2 font-medium">
                <Link onClick={() => setToggle(!toggle)} href={"/"}>
                  Home
                </Link>
                <Link onClick={() => setToggle(!toggle)} href={"#about"}>
                  About
                </Link>
                <Link onClick={() => setToggle(!toggle)} href={"#services"}>
                  Services
                </Link>
                <Link onClick={() => setToggle(!toggle)} href={"#portfolio"}>
                  Portfolio
                </Link>
                <Link onClick={() => setToggle(!toggle)} href={"#contact"}>
                  Contact
                </Link>
              </div>
              <div className="text-white mt-20 flex justify-between text-lg">
                <p>Based in Pune, India</p>
                <p>+91 72490 84224</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
