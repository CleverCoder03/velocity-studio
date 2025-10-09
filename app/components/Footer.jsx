"use client"
import {motion} from "motion/react"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks, socialLinks } from "../constants";
import Copy from "./Copy";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black px-6">
      <div className="lg:flex lg:justify-between border-b border-white">
        <div className="py-12 lg:py-25">
          <Link href="/" >
            <div className="relative w-14 h-22 lg:w-30 lg:h-30 group hover:-translate-y-5 transition-all duration-400">
              <Image src="/scroll-top.svg" alt="scroll-top" fill />
            </div>
          </Link>
        </div>

        <div className="py-12 lg:py-0 border-b lg:border-b-0 border-white flex ">
          <div className="w-1/2 lg:fit lg:py-25 lg:pl-12 lg:mr-20 lg:border-l border-white">
            <div className="flex flex-col gap-5 w-fit">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="text-white flex items-center justify-start gap-2"
                >
                  <Image
                    src={social.img}
                    alt={social.title}
                    width={25}
                    height={25}
                  />
                  <span className="font-mona font-semibold text-xl">
                    {social.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-1/2 lg:fit lg:py-25 lg:px-12 lg:mr-20 lg:border-l border-white">
            <div className="flex flex-col gap-5 w-fit">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white flex items-center justify-start gap-2"
                >
                  <span className="font-mona font-semibold text-xl">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 border-b border-white text-white">
          <Copy>
        <div className="text-[13vw] lg:text-[10vw] leading-[0.95] lg:text-justify mt-5 w-full uppercase font-mona font-extrabold">
            <h1 className="flex">
            Velocity <span className="text-xl font-medium lg:text-4xl lg:mt-3">&copy;2025</span>
          </h1>
          <h1>Studio</h1>
        </div>
          </Copy>
        <motion.div initial={{ opacity: 0 }}
              // The state to animate to WHEN the element is in the viewport
              whileInView={{ opacity: 1 }}
              // This ensures the animation only happens once
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} className="mt-25">
          <h1 className="text-xl font-mona font-semibold w-full lg:text-right">
            Developed By{" "}
            <Link
              href="https://vishalmishra.vercel.app"
              className="underline underline-offset-4 decoration-1"
            >
              Vishal Mishra
            </Link>
          </h1>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
