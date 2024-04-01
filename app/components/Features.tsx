import Image from "next/image";
import React from "react";
import { FEATURES } from "../constants";
import FeaturesCard from "./Features_card";

const Features = () => {
  return (
    <section className="flex justify-between pt-[5%] pb-[5%]">
      <div className="origin-center rotate-[15deg] pt-24 w-1/2	 ">
        <Image src="/phone.png" alt="phone" width={400} height={500} />
      </div>
      <div className="w-1/2	">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <h1 className="font-bold text-7xl pb-5">Our Features</h1>
        <ul className="grid grid-cols-2 gap-20">
          {/* <li>Hello</li> */}
          {FEATURES.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
