"use client";
import React from "react";
import { motion } from "framer-motion";

function Characteristics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=""
    >
      <div className="items-center justify-center mb-9 md:flex">
        <div>
          <h2 className="text-center font-bold text-6xl mb-10">학과특징</h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
        <a className="block group" href="/single.html">
          <ul className="text-heading-4 font-chivo font-bold inline-block mb-[26px] ">
            <li className="text-3xl">플로리다텍 4년제 학사학위</li>
            <li className="text-3xl">원어민 수준의 영어능력</li>
          </ul>
          <div className="relative mb-16">
            <div className="relative">
              <div className="pr-[26px] aspect-[430/275]">
                <img
                  className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                  src="./assets/images/character1.png"
                  alt="Agon"
                />
              </div>
              <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-[#eee] group-hover:-translate-x-[5px] group-hover:-translate-y-[5px]"></div>
              </div>
            </div>
          </div>
        </a>
        <a className="block group" href="/single.html">
          <ul className="text-heading-4 font-chivo font-bold inline-block mb-[26px] ">
            <li className="text-3xl">
              이론과 실무능력을 갖춘<br></br> FAA계기 사업용 조종사
            </li>
          </ul>
          <div className="relative mb-16">
            <div className="relative">
              <div className="pr-[26px] aspect-[430/275]">
                <img
                  className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                  src="./assets/images/character2.png"
                  alt="Agon"
                />
              </div>
              <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-[#eee] group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
              </div>
            </div>
          </div>
        </a>
        <a className="block group" href="/single.html">
          <ul className="text-heading-4 font-chivo font-bold inline-block mb-[26px] ">
            <li className="text-3xl">
              장학금 지급<br></br>(연간 US$8,000~US$16,000)
            </li>
          </ul>
          <div className="relative mb-16">
            <div className="relative">
              <div className="pr-[26px] aspect-[430/275]">
                <img
                  className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                  src="./assets/images/character3.png"
                  alt="Agon"
                />
              </div>
              <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-[#eee] group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
              </div>
            </div>
          </div>
        </a>
        <a className="block group" href="/single.html">
          <ul className="text-heading-4 font-chivo font-bold inline-block mb-[26px] ">
            <li className="text-3xl">
              국내/해외 민간항공사들과<br></br> 취업 연계과정 진행{" "}
            </li>
          </ul>
          <div className="relative mb-16">
            <div className="relative">
              <div className="pr-[26px] aspect-[430/275]">
                <img
                  className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                  src="./assets/images/character4.png"
                  alt="Agon"
                />
              </div>
              <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-[#eee] group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default Characteristics;
