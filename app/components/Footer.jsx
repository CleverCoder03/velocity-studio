import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black px-6">
      <div className="py-12 border-b border-white">
        <Link href="#">
          <div className="relative w-14 h-22">
          <Image src="/scroll-top.svg" alt="scroll-top" fill />
        </div>
        </Link>
      </div>

      <div className="py-12 border-b border-white flex">
        <div className="w-1/2">
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
        <div className="w-1/2">
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

      <div className="py-12 border-b border-white text-white">
          <div className="text-[13vw] lg:text-[10vw] leading-[0.95] lg:text-justify mt-5 w-full uppercase font-mona font-extrabold">
            <h1 className="flex">Velocity <span className="text-xl font-medium">&copy;2025</span></h1>
            <h1>Studio</h1>
          </div>
          <div className="mt-25">
            <h1 className="text-xl font-mona font-semibold">
              Developed By <Link href="https://vishalmishra.vercel.app" className="underline underline-offset-4 decoration-1">Vishal Mishra</Link>
            </h1>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
