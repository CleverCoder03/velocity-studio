"use client"
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import CharReveal from "./CharReveal";
import {motion} from "motion/react"

const Mission = () => {
  return (
    <section id="mission" className="relative mt-20 lg:mt-30 xl:mt-40">
      <div>
        <Heading name={"our mission"} number={"02"} className={"hidden"} />
      </div>
      <div className="relative bg-white h-full w-full">
        <div className="relative h-full w-full flex justify-center my-20">
          <motion.div initial={{ opacity: 0 }}
              // The state to animate to WHEN the element is in the viewport
              whileInView={{ opacity: 1 }}
              // This ensures the animation only happens once
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.4 }}>
            <div className="relative w-[50vw] h-[87vw] lg:w-[45vh] lg:h-[60vw] xl:h-[100vh]">
              <Image src="/mission.jpg" alt="Our Mission" fill />
            </div>
          </motion.div>

          <div className="absolute z-10 w-full top-0 mt-[15vh] lg:mt-[20vh] xl:mt-[22vh] text-white mix-blend-difference text-[12.8vw] lg:text-[10vw] leading-[1] text-center uppercase font-mona font-extrabold ">
            <CharReveal>
              <h1 className="text-start">Redesign</h1>
            </CharReveal>
            <CharReveal delay={0.4}>
              <h1 className="text-end">Rebuild</h1>
            </CharReveal>
            <CharReveal delay={0.8}>
              <h1 className="text-left ml-[22vw]">Rethink</h1>
            </CharReveal>
          </div>
        </div>

        <div className="flex flex-col gap-5 font-inter text-lg lg:px-20 w-full xl:px-35">
          <p className="indent-15">
            We thrive on turning imaginative concepts into user-friendly digital
            solutions. Whether it's a sleek website, a user-friendly app, or a
            memorable brand identity, we focus on creating designs that not only
            look great but also resonate with your audience. We value open
            communication and transparency, keeping you involved every step of
            the way. Your satisfaction is our priority, and we're dedicated to
            delivering exceptional results that exceed your expectations.
          </p>
          <p className="indent-15">
            Embrace a creative journey where ideas take flight and concepts come
            to life. Join us at Rethink, where every click, scroll, and
            interaction tells a story. Let’s transform your vision into an
            extraordinary digital adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
