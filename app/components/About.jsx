import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "./Heading";

const About = () => {
  return (
    <section id="about" className="relative mt-30">
      <div>
        <Heading name={"about us"} number={"01"} />

        <div className="mt-12">
          <p className="indent-17 text-[5vw] leading-[1.3] font-inter font-medium text-justify">
            We are a creative studio that loves making amazing websites and cool
            products. We've won some awards for our work. We're really good at
            creating brands, designing cool stuff, and making things work just
            right. At our core, we believe in the power of simplicity and
            effectiveness. Our approach is all about understanding your needs
            and bringing your ideas to life without unnecessary complexity.
          </p>
        </div>

        <div className="my-30">
          <div className="relative w-full h-[40rem]">
            <Image src="/about.jpg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
