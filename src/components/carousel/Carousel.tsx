"use client";
import React from "react";
import { CarouselStylesType } from "@material-tailwind/react";
import { Carousel as CarouselResponsive } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Carousel = ({ items }: { items: CarouselItems[] }) => {
  return (
    <CarouselResponsive
      autoplay
      autoplayDelay={3000}
      loop
      nextArrow={({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="hidden top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 place-items-center"
        >
          <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      )}
      prevArrow={({ loop, handlePrev, firstIndex }) => (
        <button
          onClick={handlePrev}
          disabled={!loop && firstIndex}
          className="hidden top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 place-items-center"
        >
          <ChevronLeftIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="h-full flex items-center justify-center">
          <img src={item.url} className="w-full h-full" />
          {item.title && <p className="legend hidden">{item.title}</p>}
        </div>
      ))}
    </CarouselResponsive>
  );
};

export default Carousel;
