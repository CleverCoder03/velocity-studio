"use client"
import Image from "next/image";
import {motion} from "motion/react"
import Heading from "./Heading";
import Link from "next/link";
import Copy from "./Copy";

const About = () => {
  return (
    <section id="about" className="relative mt-30 lg:mt-40 xl:mt-50">
      <div className="relative w-full lg:flex lg:justify-between">
        <div className="lg:w-[50vw] xl:w-[50vw]">
          <div className="w-full mt-10 lg:mt-0">
            <Heading name={"the story"} number={"01"} />
          </div>
          <div className="mt-12 lg:my-30">
            <Copy>
              <div className="text-xl leading-[1.3] font-inter font-medium">
              We are a creative studio that loves making amazing websites and
              cool products. We've won some awards for our work. We're really
              good at creating brands, designing cool stuff, and making things
              work just right. At our core, we believe in the power of
              simplicity and effectiveness. Our approach is all about
              understanding your needs and bringing your ideas to life without
              unnecessary complexity.
            </div>
            </Copy>
            <Link href="#contact">
              <div className="mt-10 flex gap-2 border w-fit py-2 px-5 rounded-4xl">
              <span className="uppercase text-sm lg:text-base font-mona font-semibold">
                Let's Connect
              </span>
                <Image src="/sparkle.svg" alt="Sparkle" width={20} height={20}/>
            </div>
            </Link>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }}
              // The state to animate to WHEN the element is in the viewport
              whileInView={{ opacity: 1 }}
              // This ensures the animation only happens once
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.4 }} className="my-30 lg:my-0">
          <div className="relative w-full lg:w-[330px] h-[110vw] lg:h-[500px] xl:w-[25vw] xl:h-[36vw]">
            <Image src="/about.jpg" alt="about" fill />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
