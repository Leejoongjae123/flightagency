import React from "react";
import Script from "next/script";
import Link from "@nextui-org/react";
import Image from "next/image";
import EmblaCarousel from "./components/carousel/EmblaCarousel";
import { motion } from "framer-motion";
import Characteristics from "./components/Characteristics";
function page() {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="full-with address hidden">
        <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
          <p className="text-base hidden font-bold md:block">
            66 avenue des Champs, 75008, Paris, France
          </p>
          <div className="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row">
            <span>(+01) - 456 789</span>
            <div className="border border-dashed border-white self-stretch"></div>
            <span>contact@agon.com</span>
          </div>
        </div>
      </div>
      <a name="top"></a>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">


          <Characteristics />
        </div>

        {/* <div className="flex w-[100vw] h-[500px] banner-hero bg-orange-100 banner-1"></div> */}
        
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
          <div className="text-center mb-[70px]">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              We facilitate the creation of strategy and design
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
              Interactively transform magnetic growth strategies whereas
              prospective &quot;outside the box&quot; thinking.
            </p>
          </div>
          <div className="lg:flex lg:gap-5 xl:gap-[30px]">
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
              <div>
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-flower.svg"
                  alt="icon"
                />
                <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Business strategy
                </h2>
                <p className="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-flower-white.svg"
                alt="icon"
              />
            </div>
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]">
              <div>
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-map.svg"
                  alt="icon"
                />
                <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Local Marketing
                </h2>
                <p className="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-map-white.svg"
                alt="icon"
              />
            </div>
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]">
              <div>
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-pine.svg"
                  alt="icon"
                />
                <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Social Media
                </h2>
                <p className="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-pine-white.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
            <div className="relative">
              <img
                className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
                src="./assets/images/thumbnail-2.png"
                alt="Agon"
              />
            </div>
            <div className="flex-1 order-1">
              <span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
                What We Do, What You Get
              </span>
              <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
                We believe that our works can contribute to a better world.
              </h3>
              <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                Necessary to deliver white glove, fully managed campaigns that
                surpass industry benchmarks.Take your career to next level.
                Apply to our team and see what we can do together. You’re good
                enough.
              </p>
              <div className="border border-green-900 border-dashed mb-[48px]"></div>
              <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold">
                      Boost your sale
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold">
                      Smart Installation Tools
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold">
                      Introducing New Features
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="mb-[30px] lg:mb-0">
                  <div className="flex items-center mb-[17px]">
                    <img
                      className="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 className="text-heading-6 font-chivo font-bold">
                      Dynamic Boosting
                    </h4>
                  </div>
                  <p className="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div className="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
            <img
              className="absolute top-0 left-0 z-0 -translate-x-1/4"
              src="./assets/images/icons/pattern-4.svg"
              alt="pattern icon"
            />
            <div className="text-center relative mb-[70px] md:mb-[90px]">
              <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                What We Offer
              </h2>
              <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
                What makes us different from others? We give holistic solutions
                with strategy, design &amp; technology.
              </p>
            </div>
            <div className="offer-list dots">
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p className="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div className="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
            <div>
              <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                Our Happy Customers
              </h2>
              <p className="text-quote md:text-lead-lg text-gray-600">
                Know about our clients, we are a woldwide corporate brand
              </p>
            </div>
            <div className="flex items-center gap-5 self-end">
              <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev">
                <img
                  className="group-hover:filter-white"
                  src="./assets/images/icons/icon-prev.svg"
                  alt="control icon button"
                />
              </div>
              <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next">
                <img
                  className="group-hover:filter-white"
                  src="./assets/images/icons/icon-next.svg"
                  alt="control icon button"
                />
              </div>
            </div>
          </div>
          <div className="feedback-list ml-[-15px]">
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-1.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-2.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-3.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-4.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-5.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-6.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-7.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div className="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
              <img
                className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-8.png"
                alt="avatar"
              />
              <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p className="text-sm font-bold mb-5 text-gray-700">
                Louis Vuitton
              </p>
              <p className="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
          </div>
        </div>

        <div className="full-width bg-green-900 relative">
          <img
            className="absolute right-0 opacity-30 top-[-150px]"
            src="./assets/images/icons/pattern-2.svg"
            alt=""
          />
          <img
            className="absolute opacity-30 bottom-[-90px] left-[-15px]"
            src="./assets/images/icons/pattern-1.svg"
            alt=""
          />
          <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 pt-[90px] pb-[111px]">
            <div className="text-center text-white mb-[56px]">
              <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
                Choose The Best Plan That’s For You
              </h2>
              <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
            </div>
            <div className="flex items-center justify-center gap-[10px] mb-[54px] text-white">
              <p className="text-text">Bill Monthly</p>
              <div className="flex items-center justify-center">
                <label
                  className="flex items-center cursor-pointer"
                  for="billSwitch"
                >
                  <div className="relative">
                    <input
                      className="sr-only peer"
                      id="billSwitch"
                      type="checkbox"
                      name=""
                    />
                    <div className="block rounded-full w-[65px] h-[30px] bg-white"></div>
                    <div className="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900"></div>
                  </div>
                </label>
              </div>
              <p className="text-text">Bill Annually</p>
            </div>
            <div className="package">
              <div className="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]">
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-monthly">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $35
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Standard
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-monthly flex flex-col justify-between p-[35px]">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $89
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Essentials
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-monthly md:col-span-2 lg:col-span-1">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $125
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Premium
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      Avanced features for pros who need more customization.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-annually">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $420
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Standard
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-annually flex flex-col justify-between p-[35px]">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $1068
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Essentials
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-annually md:col-span-2 lg:col-span-1">
                  <div>
                    <div className="mb-[21px]">
                      <span className="text-heading-3 font-bold font-chivo">
                        $1500
                      </span>
                      <span className="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                      Premium
                    </h5>
                    <p className="text-sm font-bold text-gray-400 mb-[43px]">
                      Avanced features for pros who need more customization.
                    </p>
                    <div className="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul className="mb-[76px]">
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          className="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          className="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li className="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span className="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[70px] md:mt-[150px]">
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
            <div className="flex-1 mb-[30px]">
              <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
                newsletter
              </p>
              <h4 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
                Subscribe our newsletter
              </h4>
              <p className="text-text text-gray-500">
                By clicking the button, you are agreeing with our
              </p>
              <a className="text-green-900" href="/">
                Term & Conditions
              </a>
              <form className="mt-[30px]" action="/">
                <div className="bg-white flex items-center justify-between p-3 rounded-[55px]">
                  <input
                    className="ml-[25px]"
                    type="text"
                    placeholder="Enter your mail ..."
                  />
                  <button
                    className="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]"
                    type="submit"
                  >
                    <img
                      className="filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="relative flex-1">
              <img
                className="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
                src="./assets/images/thumbnail-2.png"
                alt="Agon"
              />
              <img
                className="h-full w-full object-cover absolute animate-float w-[225px] h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"
                src="./assets/images/chart.png"
                alt="Agon"
              />
            </div>
          </div>
        </div>
        <div
          className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
          id="backToTop"
        >
          <a
            className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
            href="#top"
          >
            <img src="./assets/images/icons/icon-up.svg" alt="to top icon" />
          </a>
        </div>
        
      </div>
      <Script
        src="assets/scripts/vendors/jquery-3.6.0.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/scripts/vendors/slick.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script src="assets/scripts/app.js" strategy="lazyOnload"></Script>
    </>
  );
}

export default page;
