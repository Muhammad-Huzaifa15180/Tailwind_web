import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="container mx-auto pt-[20%]">
      <div className="flex justify-between items-center gap-20 w-11/12">
        <div className="w-6/12	">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="text-lg font-normal text-green-500">
            WE ARE HERE FOR YOU
          </p>
          <h1 className="font-bold text-7xl">Guide You to Easy Path</h1>
        </div>
        <div className="w-6/12">
          <p className="w-[95%] text-justify text-neutral-400">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <Image
          src="/boat.png"
          alt="camp"
          width={1440}
          height={500}
          className="w-full bg-cover bg-center"
        />
        <div className="flex justify-between">
          <div className="bg-white w-72  rounded-3xl px-12 py-10 absolute top-[15%] left-[6%]">
            <div className=" flex justify-between	">
              <p className="text-neutral-400 pb-2">Destination</p>
              <p className="text-green-500">48 min</p>
            </div>
            <p className="text-black font-bold pb-5">Aguas Calientes</p>
            <div className="flex justify-between ">
              <div className="text-neutral-400">
                <p className="pb-2">Start track</p>
                <p className="text-black font-bold">Wonorejo Pasuruan</p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/meter.svg" alt="close" width={30} height={30} className="absolute left-[85px] top-[85px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
