import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { services } from "../constants";

const Services = () => {
  return (
    <section id="services" className="relative mt-20">
      <Heading name={"services"} number={"03"} title={"Expertise"} />

      <div className="mt-24 border-t-[1px] border-gray-300 ">
        {services.map((service) => (
          <div key={service.id} className="border-b-[1px] border-gray-300  py-15">
            <div className="border-[1px] border-gray-300 rounded-full w-fit py-7 px-3">
              <div className="relative w-15 h-15">
                <Image src={service.img} alt={service.title} fill />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-mona font-semibold text-3xl">
                <span>{service.id}.</span>{" "}
                <span className="ml-5 tracking-tight">{service.title}</span>
              </h1>
              <div className="mt-5">
                <p className="font-mona text-gray-500 text-lg">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
