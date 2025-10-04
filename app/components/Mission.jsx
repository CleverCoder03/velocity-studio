import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Mission = () => {
  return (
    <section id="mission" className="relative">
      <Heading name={"mission"} number={"02"} />

      <div className="relative bg-white h-full w-full">
        <div className="relative h-full w-full flex justify-center my-20">
          <div className="relative w-[17rem] h-[27rem]">
            <Image src="/mission.jpg" alt="Our Mission" fill />
          </div>

          <div className="absolute z-10 w-full top-0 mt-[15vh] text-white mix-blend-difference text-[12.8vw] lg:text-[10vw] leading-[1] text-center uppercase font-mona font-extrabold ">
            <h1 className="text-start">Redesign</h1>
            <h1 className="text-end">Rebuild</h1>
            <h1 className="text-left indent-[22vw]">Rethink</h1>
          </div>
        </div>

        <div className="flex flex-col gap-5 font-inter text-lg">
          <p className="indent-15">
            We thrive on turning imaginative concepts into user-friendly digital solutions. Whether it's a sleek website, a user-friendly app, or a memorable brand identity, we focus on creating designs that not only look great but also resonate with your audience. We value open communication and transparency, keeping you involved every step of the way. Your satisfaction is our priority, and we're dedicated to delivering exceptional results that exceed your expectations.
          </p>
          <p className="indent-15">
            Embrace a creative journey where ideas take flight and concepts come to life. Join us at Rethink, where every click, scroll, and interaction tells a story. Let’s transform your vision into an extraordinary digital adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
