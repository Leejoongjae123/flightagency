"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./css/embla.css";
import "./css/base.css";
import "./css/sandbox.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="relative w-[100vw] h-[60vh] items-center justify-center">
                  <Image
                    src="/assets/images/main.jpg"
                    fill
                    objectFit="cover"
                    alt="Picture of the author"
                  />
                  <div className="z-50 absolute top-5 left-5 w-full h-full ">
                    <div class="flex flex-col w-2/3 p-20 text-white">
                      <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">
                        We are supporters for your business dream
                      </h1>
                      <p class="text-white md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">
                        Integrated workflow designed for product teams. We
                        create world-class development and branding
                      </p>
                      <div class="flex items-center justify-start"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
