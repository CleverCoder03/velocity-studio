"use client"
import {motion} from "motion/react"
import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { services } from "../constants";

const Services = () => {
  return (
    <section id="services" className="relative mt-30 lg:mt-40 xl:mt-50">
      <Heading name={"services"} number={"03"} title={"Expertise"} />

      <div className="mt-24 border-t-[1px] border-gray-300 ">
        {services.map((service) => (
          <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} key={service.id} className="border-b-[1px] border-gray-300  py-15 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-[10vw]">
            <div className="border-[1px] border-gray-300 rounded-full w-fit h-fit py-8 px-3">
              <div className="relative w-15 h-15">
                <Image src={service.img} alt={service.title} fill />
              </div>
            </div>
            <div className="mt-5 lg:flex lg:justify-between lg:w-full">
              <div className="font-mona font-semibold text-3xl flex lg:gap-[10vw]">
                <span>{service.id}.</span>{" "}
                <h1 className={`ml-5 tracking-tight ${service.title === "Creative Development" ? "w-47" : "w-full"}`}>{service.title}</h1>
              </div>
              <div className="mt-5 lg:mt-0 lg:w-[30vw]">
                <p className="font-mona text-gray-500 text-lg">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
