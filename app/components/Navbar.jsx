"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const navLinks = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "About", href: "#about" },
  { id: 3, link: "Services", href: "#services" },
  { id: 4, link: "Portfolio", href: "#portfolio" },
  { id: 5, link: "Contact", href: "#contact" },
];

const navbarBgVariants = {
  // State for desktop or initial mobile state
  transparent: {
    backgroundColor: "rgba(0, 0, 0, 0)", // Animate from fully transparent
  },
  // State for mobile after delay
  solid: {
    backgroundColor: "rgba(0, 0, 0, 1)", // Animate to solid black
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client side, after the component has mounted
    setIsClient(true);
  }, []);

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
      <motion.div
        variants={navbarBgVariants}
        initial="transparent"
        animate={isClient && isMobile ? "solid" : "transparent"}
        transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
        className="absolute top-0 left-0 w-full z-20 text-white lg:bg-transparent lg:mix-blend-difference"
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
          className="flex w-full justify-between items-center px-6 py-4 lg:px-10"
        >
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
        </motion.nav>
      </motion.div>

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
