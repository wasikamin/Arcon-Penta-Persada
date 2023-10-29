"use client";
import React from "react";
import { Carousel as CarouselResponsive } from "@material-tailwind/react";

const Carousel = ({ items }: { items: CarouselItems[] }) => {
  return (
    <CarouselResponsive autoplay>
      {items.map((item, index) => (
        <div key={index} className="h-full flex items-center justify-center">
          <img src={item.url} />
          {item.title && <p className="legend hidden">{item.title}</p>}
        </div>
      ))}
    </CarouselResponsive>
  );
};

export default Carousel;
