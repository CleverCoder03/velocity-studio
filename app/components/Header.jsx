import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
  return (
    <>
      <header className="relative h-dvh w-dvw">
        <div className="absolute top-0 left-0 h-full w-full z-10 mix-blend-darken">
          <Image
            src="/hero-bg-hd.png"
            alt="Header Background"
            className="object-cover object-center opacity-95 lg:scale-110"
            fill
          />
        </div>
        <Navbar />
        <div className="absolute bottom-0 z-12 text-white mix-blend-difference">
          <div className="px-6 py-10 lg:px-10 flex flex-col items-center">
            <div className="font-mona w-full text-xl font-bold flex flex-col lg:flex-row lg:justify-between items-center">
              <div>Based In Pune, India</div>
              <div className="hidden lg:block">(&copy; 2025)</div>
              <div className="flex items-end">Scroll Down {downArrow}</div>
            </div>
            <div className="text-[16vw] lg:text-[10vw] leading-[0.95] text-center lg:text-justify mt-5 w-full uppercase font-mona font-extrabold">
              <h1>Velocity studio</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
