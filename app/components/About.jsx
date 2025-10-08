import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "./Heading";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="relative mt-30 lg:mt-40 xl:mt-50">
      <div className="relative w-full lg:flex lg:justify-between">
        <div className="lg:w-[50vw] xl:w-[50vw]">
          <div className="w-full mt-10 lg:mt-0">
            <Heading name={"the story"} number={"01"} />
          </div>
          <div className="mt-12 lg:my-30">
            <p className="indent-17 text-xl leading-[1.3] font-inter font-medium">
              We are a creative studio that loves making amazing websites and
              cool products. We've won some awards for our work. We're really
              good at creating brands, designing cool stuff, and making things
              work just right. At our core, we believe in the power of
              simplicity and effectiveness. Our approach is all about
              understanding your needs and bringing your ideas to life without
              unnecessary complexity.
            </p>
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

        <div className="my-30 lg:my-0">
          <div className="relative w-full lg:w-[330px] h-[110vw] lg:h-[500px] xl:w-[25vw] xl:h-[36vw]">
            <Image src="/about.jpg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
