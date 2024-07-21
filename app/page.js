import React from "react";
import Script from "next/script";
import Link from "@nextui-org/react";
function page() {
  return (
    <>
      <div class="full-with address hidden">
        <div class="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
          <p class="text-base hidden font-bold md:block">
            66 avenue des Champs, 75008, Paris, France
          </p>
          <div class="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row">
            <span>(+01) - 456 789</span>
            <div class="border border-dashed border-white self-stretch"></div>
            <span>contact@agon.com</span>
          </div>
        </div>
      </div>
      <div class="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
        <a name="top"> </a>
        <div class="absolute top-0 left-0 w-screen h-full bg-opacity-80 hidden video-iframe bg-[#0b0b0b] z-[999999]">
          <div class="mx-auto video w-1/2">
            <div class="flex justify-end">
              <button
                class="text-white close-video text-[20px]"
                type="button"
                title="Close (Esc)"
              >
                x
              </button>
            </div>
            <iframe
              class="aspect-video w-full"
              src="https://www.youtube.com/embed/oRI37cOPBQQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="overlay"></div>

        <div class="full-width banner-hero bg-orange-100 banner-1">
          <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center">
            <div class="flex-1">
              <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">
                We are
                <span class="text-green-900">&nbsp;awesome team&nbsp;</span>
                <span>for your business dream</span>
              </h1>
              <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">
                Integrated workflow designed for product teams. We create
                world-class development and branding
              </p>
              <div class="flex items-center justify-start">
                <button type="button">
                  <a
                    class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                    href="#"
                  >
                    <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                      Get Start
                    </span>
                    <i>
                      <img
                        class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
                <a
                  class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                  href="/"
                >
                  Learn More
                  <i>
                    <img
                      class="ml-[7px] w-[12px]"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </div>
            </div>
            <div class="hidden relative flex-1 h-auto self-stretch lg:block">
              <div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]">
                <img
                  class="h-full w-full object-cover"
                  src="./assets/images/hero-1.png"
                  alt="Agon"
                />
              </div>
              <div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
                <div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center">
                  <img
                    class="h-full w-full object-cover"
                    src="./assets/images/video-bg.png"
                    alt="Agon"
                  />
                  <p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">
                    Watch intro video
                  </p>
                  <button class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]">
                    <img
                      src="./assets/images/icons/icon-play.svg"
                      alt="play button"
                      width="15"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-1.svg"
                alt="partner logo"
              />
            </a>
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-2.svg"
                alt="partner logo"
              />
            </a>
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-3.svg"
                alt="partner logo"
              />
            </a>
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-4.svg"
                alt="partner logo"
              />
            </a>
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-5.svg"
                alt="partner logo"
              />
            </a>
            <a
              class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto"
              href="/"
            >
              <img
                src="./assets/images/partner-logo-6.svg"
                alt="partner logo"
              />
            </a>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div class="text-center">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              See why we are trusted the world over
            </h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
          <div class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px] active"
              id="branding"
            >
              Branding
            </p>
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
              id="development"
            >
              Development
            </p>
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
              id="animation"
            >
              Animation
            </p>
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
              id="user-exp"
            >
              User Experience
            </p>
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
              id="social-network"
            >
              Social Network
            </p>
            <p
              class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
              id="marketing"
            >
              Marketing
            </p>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-2 branding">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Optimize and scale, easy to start
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-1.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-3 development !hidden">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Design Studios That Everyone Should Know
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-3.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-4 animation !hidden">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                We can blend colors multiple ways
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-4.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-5 user-exp !hidden">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Choose The Best Plan That's For You
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-5.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-6 social-network !hidden">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Subscribe our newsletter to get gift
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-19.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
          <div class="tab-content lg:gap-[30px] lg:flex bg-bg-7 marketing !hidden">
            <div class="p-5 md:p-[60px] lg:w-1/2">
              <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Ready to get started? Create and Account
              </h2>
              <p class="text-excerpt mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
            </div>
            <div class="relative lg:w-1/2">
              <img
                class="h-full w-full object-cover"
                src="./assets/images/thumbnail-22.png"
                alt="Agon"
              />
              <img
                class="absolute top-0 right-0"
                src="./assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                <img
                  src="./assets/images/icons/icon-play.svg"
                  alt="play button"
                  width="30"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
          <div class="text-center mb-[70px]">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              We facilitate the creation of strategy and design
            </h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
              Interactively transform magnetic growth strategies whereas
              prospective &quot;outside the box&quot; thinking.
            </p>
          </div>
          <div class="lg:flex lg:gap-5 xl:gap-[30px]">
            <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
              <div>
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-flower.svg"
                  alt="icon"
                />
                <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Business strategy
                </h2>
                <p class="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-flower-white.svg"
                alt="icon"
              />
            </div>
            <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]">
              <div>
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-map.svg"
                  alt="icon"
                />
                <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Local Marketing
                </h2>
                <p class="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-map-white.svg"
                alt="icon"
              />
            </div>
            <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]">
              <div>
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                  src="./assets/images/icons/icon-pine.svg"
                  alt="icon"
                />
                <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                  Social Media
                </h2>
                <p class="text-excerpt text-gray-600 mb-[30px]">
                  You are always welcome to visit our little den. Professional
                  in teir craft! All products were super amazing with strong
                  attension to details, comps and overall vibe.
                </p>
              </div>
              <button type="button">
                <a
                  class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                  href="#"
                >
                  <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <img
                class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
                src="./assets/images/icons/icon-pine-white.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
          <div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
            <div class="relative">
              <img
                class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
                src="./assets/images/thumbnail-2.png"
                alt="Agon"
              />
            </div>
            <div class="flex-1 order-1">
              <span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
                What We Do, What You Get
              </span>
              <h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
                We believe that our works can contribute to a better world.
              </h3>
              <p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                Necessary to deliver white glove, fully managed campaigns that
                surpass industry benchmarks.Take your career to next level.
                Apply to our team and see what we can do together. You’re good
                enough.
              </p>
              <div class="border border-green-900 border-dashed mb-[48px]"></div>
              <div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                <div class="mb-[30px] lg:mb-0">
                  <div class="flex items-center mb-[17px]">
                    <img
                      class="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 class="text-heading-6 font-chivo font-bold">
                      Boost your sale
                    </h4>
                  </div>
                  <p class="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div class="mb-[30px] lg:mb-0">
                  <div class="flex items-center mb-[17px]">
                    <img
                      class="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 class="text-heading-6 font-chivo font-bold">
                      Smart Installation Tools
                    </h4>
                  </div>
                  <p class="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div class="mb-[30px] lg:mb-0">
                  <div class="flex items-center mb-[17px]">
                    <img
                      class="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 class="text-heading-6 font-chivo font-bold">
                      Introducing New Features
                    </h4>
                  </div>
                  <p class="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div class="mb-[30px] lg:mb-0">
                  <div class="flex items-center mb-[17px]">
                    <img
                      class="mr-[9px]"
                      src="./assets/images/icons/icon-leaf.svg"
                      alt="leaf icon"
                    />
                    <h4 class="text-heading-6 font-chivo font-bold">
                      Dynamic Boosting
                    </h4>
                  </div>
                  <p class="text-excerpt text-gray-600">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
            <img
              class="absolute top-0 left-0 z-0 -translate-x-1/4"
              src="./assets/images/icons/pattern-4.svg"
              alt="pattern icon"
            />
            <div class="text-center relative mb-[70px] md:mb-[90px]">
              <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                What We Offer
              </h2>
              <p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
                What makes us different from others? We give holistic solutions
                with strategy, design &amp; technology.
              </p>
            </div>
            <div class="offer-list dots">
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-trees.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Market research
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-sun.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Strategic Consulting
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
              <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                <img
                  class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                  src="./assets/images/icons/icon-hat.svg"
                  alt="icon"
                />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                  Cognitive Solution
                </h3>
                <p class="text-text text-gray-600">
                  One make creepeth, man bearing theira firmament.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
            <div>
              <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                Our Happy Customers
              </h2>
              <p class="text-quote md:text-lead-lg text-gray-600">
                Know about our clients, we are a woldwide corporate brand
              </p>
            </div>
            <div class="flex items-center gap-5 self-end">
              <div class="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev">
                <img
                  class="group-hover:filter-white"
                  src="./assets/images/icons/icon-prev.svg"
                  alt="control icon button"
                />
              </div>
              <div class="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next">
                <img
                  class="group-hover:filter-white"
                  src="./assets/images/icons/icon-next.svg"
                  alt="control icon button"
                />
              </div>
            </div>
          </div>
          <div class="feedback-list ml-[-15px]">
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-1.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-2.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-3.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-4.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-5.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-6.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-7.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
            <div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
              <img
                class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
                src="./assets/images/avatar-8.png"
                alt="avatar"
              />
              <p class="text-heading-6 font-chivo font-bold mb-[6px]">
                Wade Warren
              </p>
              <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
              <p class="text-text text-gray-500">
                Even factoring differences in body weight between children and
                adults into account.
              </p>
            </div>
          </div>
        </div>
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
          <div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
            <div>
              <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                Latest News
              </h2>
              <p class="text-quote md:text-lead-lg text-gray-600">
                From Our blog and Event fanpage
              </p>
            </div>
            <button type="button">
              <a
                class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] bg-black text-white w-fit"
                href="#"
              >
                <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  View More
                </span>
                <i>
                  <img
                    class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
          </div>
          <div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
            <a class="block group" href="/single.html">
              <div class="flex items-center mb-[11px]">
                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                <span class="uppercase text-gray-500">company</span>
              </div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                We can blend colors multiple ways, the most common
              </p>
              <div class="relative mb-16">
                <div class="relative">
                  <div class="pr-[26px] aspect-[430/275]">
                    <img
                      class="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                      src="./assets/images/thumbnail-3.png"
                      alt="Agon"
                    />
                  </div>
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </a>
            <a class="block group" href="/single.html">
              <div class="flex items-center mb-[11px]">
                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                <span class="uppercase text-gray-500">Marketing Event</span>
              </div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                How To Blow Through Capital At An Incredible Rate
              </p>
              <div class="relative mb-16">
                <div class="relative">
                  <div class="pr-[26px] aspect-[430/275]">
                    <img
                      class="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                      src="./assets/images/thumbnail-4.png"
                      alt="Agon"
                    />
                  </div>
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </a>
            <a class="block group" href="/single.html">
              <div class="flex items-center mb-[11px]">
                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                <span class="uppercase text-gray-500">Customer Services</span>
              </div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                Design Studios That Everyone Should Know About?
              </p>
              <div class="relative mb-16">
                <div class="relative">
                  <div class="pr-[26px] aspect-[430/275]">
                    <img
                      class="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                      src="./assets/images/thumbnail-5.png"
                      alt="Agon"
                    />
                  </div>
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="full-width bg-green-900 relative">
          <img
            class="absolute right-0 opacity-30 top-[-150px]"
            src="./assets/images/icons/pattern-2.svg"
            alt=""
          />
          <img
            class="absolute opacity-30 bottom-[-90px] left-[-15px]"
            src="./assets/images/icons/pattern-1.svg"
            alt=""
          />
          <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 pt-[90px] pb-[111px]">
            <div class="text-center text-white mb-[56px]">
              <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
                Choose The Best Plan That’s For You
              </h2>
              <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
            </div>
            <div class="flex items-center justify-center gap-[10px] mb-[54px] text-white">
              <p class="text-text">Bill Monthly</p>
              <div class="flex items-center justify-center">
                <label
                  class="flex items-center cursor-pointer"
                  for="billSwitch"
                >
                  <div class="relative">
                    <input
                      class="sr-only peer"
                      id="billSwitch"
                      type="checkbox"
                      name=""
                    />
                    <div class="block rounded-full w-[65px] h-[30px] bg-white"></div>
                    <div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900"></div>
                  </div>
                </label>
              </div>
              <p class="text-text">Bill Annually</p>
            </div>
            <div class="package">
              <div class="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]">
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-monthly">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $35
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Standard
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-monthly flex flex-col justify-between p-[35px]">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $89
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Essentials
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-monthly md:col-span-2 lg:col-span-1">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $125
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /month
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Premium
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      Avanced features for pros who need more customization.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-annually">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $420
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Standard
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-annually flex flex-col justify-between p-[35px]">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $1068
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Essentials
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      All the basics for businesses that are just getting
                      started.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                          src="./assets/images/icons/icon-right.svg"
                          alt="arrow right icon"
                        />
                      </i>
                    </a>
                  </button>
                </div>
                <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-annually md:col-span-2 lg:col-span-1">
                  <div>
                    <div class="mb-[21px]">
                      <span class="text-heading-3 font-bold font-chivo">
                        $1500
                      </span>
                      <span class="text-sm font-bold text-gray-400 ml-[2px]">
                        /year
                      </span>
                    </div>
                    <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">
                      Premium
                    </h5>
                    <p class="text-sm font-bold text-gray-400 mb-[43px]">
                      Avanced features for pros who need more customization.
                    </p>
                    <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                    <ul class="mb-[76px]">
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Unlimited updates
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          class="tick-icon"
                          src="./assets/images/icons/icon-tick.svg"
                          alt="icon"
                        />
                        <img
                          class="hidden tick-icon-active"
                          src="./assets/images/icons/icon-tick-orange.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom permissions
                        </span>
                      </li>
                      <li class="flex items-center gap-[10px] mb-[17px]">
                        <img
                          src="./assets/images/icons/icon-close.svg"
                          alt="icon"
                        />
                        <span class="text-md text-gray-500">
                          Custom designs & features
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button type="button">
                    <a
                      class="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                      href="#"
                    >
                      <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                        Get Started
                      </span>
                      <i>
                        <img
                          class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
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
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[70px] md:mt-[150px]">
          <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
            <div class="flex-1 mb-[30px]">
              <p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
                newsletter
              </p>
              <h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
                Subscribe our newsletter
              </h4>
              <p class="text-text text-gray-500">
                By clicking the button, you are agreeing with our
              </p>
              <a class="text-green-900" href="/">
                Term & Conditions
              </a>
              <form class="mt-[30px]" action="/">
                <div class="bg-white flex items-center justify-between p-3 rounded-[55px]">
                  <input
                    class="ml-[25px]"
                    type="text"
                    placeholder="Enter your mail ..."
                  />
                  <button
                    class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]"
                    type="submit"
                  >
                    <img
                      class="filter-white"
                      src="./assets/images/icons/icon-right.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
            <div class="relative flex-1">
              <img
                class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
                src="./assets/images/thumbnail-2.png"
                alt="Agon"
              />
              <img
                class="h-full w-full object-cover absolute animate-float w-[225px] h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"
                src="./assets/images/chart.png"
                alt="Agon"
              />
            </div>
          </div>
        </div>
        <div
          class="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
          id="backToTop"
        >
          <a
            class="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
            href="#top"
          >
            <img src="./assets/images/icons/icon-up.svg" alt="to top icon" />
          </a>
        </div>
        <footer class="mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]">
          <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
            <div class="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
              <img
                class="h-full w-full object-cover max-w-[162px]"
                src="./assets/images/logo.svg"
                alt="logo"
              />
              <div class="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
                <p class="text-heading-6 font-chivo font-bold">
                  Ready to get started?
                </p>
                <button type="button">
                  <a
                    class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
                    href="#"
                  >
                    <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                      Create an Account
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div class="w-full bg-gray-200 h-[1px] mb-[52px]"></div>
            <div class="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
              <div>
                <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                  Contact
                </h5>
                <p class="text-text mb-5">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
                <p class="text-text underline">(239) 555-0108</p>
                <p class="text-text underline">contact@agon.com</p>
              </div>
              <div>
                <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                  About Us
                </h5>
                <ul>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Mission &amp; Vision
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Our Team
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Press &amp; Media
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Advertising
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                  Discover
                </h5>
                <ul>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Our Blog
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Plans &amp; Pricing
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Knowledge Base
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Office Center
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      News &amp; Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                  Support
                </h5>
                <ul>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Editor Help
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Community
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Live Chatting
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Support Center
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                  Useful links
                </h5>
                <ul>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Request an offer
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      How it works
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Reviews
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                      href="/"
                    >
                      Stories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
            <div class="text-gray-400 lg:flex lg:items-center lg:justify-between">
              <div class="md:flex md:items-center md:gap-6">
                <p class="text-lead font-bold">©Agon Official 2022</p>
                <div class="flex items-center justify-between md:gap-6">
                  <a class="text-text" href="/">
                    Privacy policy
                  </a>
                  <a class="text-text" href="/">
                    Cookies
                  </a>
                  <a class="text-text" href="/">
                    Terms of service
                  </a>
                </div>
              </div>
              <div class="flex items-center justify-center gap-5 mt-5 lg:mt-0">
                <a
                  class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                  href="/"
                >
                  <img
                    class="h-full w-full object-cover"
                    src="./assets/images/icons/icon-facebook-green.svg"
                    alt="facebook icon"
                  />
                </a>
                <a
                  class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                  href="/"
                >
                  <img
                    class="h-full w-full object-cover"
                    src="./assets/images/icons/icon-instagram-green.svg"
                    alt="instagram icon"
                  />
                </a>
                <a
                  class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                  href="/"
                >
                  <img
                    class="h-full w-full object-cover"
                    src="./assets/images/icons/icon-twitter-green.svg"
                    alt="twitter icon"
                  />
                </a>
                <a
                  class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                  href="/"
                >
                  <img
                    class="h-full w-full object-cover"
                    src="./assets/images/icons/icon-linkedin-green.svg"
                    alt="linkedin icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
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
