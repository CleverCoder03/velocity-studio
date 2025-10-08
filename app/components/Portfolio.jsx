import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative mt-30 lg:mt-40 xl:mt-50">
      <Heading name={"Portfolio"} number={"04"} />

      <div className="pb-20 border-b-[1px] border-gray-300">
        <div className="mt-5 text-5xl uppercase font-mona font-extrabold">
          <h1>Selected work</h1>
          <h1>&copy;2021 — 2025</h1>
        </div>

        <div className="mt-8">
          <p className="indent-15 font-inter font-normal text-base">
            Here, you'll find a curated collection of our finest work,
            showcasing our expertise in web design, branding, animation, and
            more. Each project is a testament to our passion for creativity and
            innovation. Take a glimpse into what we do best and discover how we
            can transform your ideas into compelling digital experiences. Let
            our portfolio inspire your next project.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative w-14 h-22">
            <Image src="/scroll-down.svg" alt="scroll" fill />
          </div>
        </div>
      </div>

      <div className="">
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
