"use client";

import Carousel from "../_components/carousel";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(2);
  const items = [1, 2, 3, 4, 5,6,7,8];
  const total = items.length;
  return (
    <div>
      <section>
        <Carousel />
      </section>
      <section className="mt-10 flex justify-center">
        <div className="flex w-100 overflow-auto" style={{
                  scrollbarWidth:"none"
                }} >
          <div className="flex flex-row gap-5 justify-start animate-scroll-x pr-5">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div key={index} className="min-w-20 h-20 flex items-center justify-center bg-blue-200 rounded-md" >
                  {item}
                </div>
              );
            })}
          </div>
          <div aria-hidden className="flex flex-row gap-5 justify-start animate-scroll-x pr-5">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div key={index} className="min-w-20 h-20 flex items-center justify-center bg-blue-200 rounded-md" >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mt-10 flex justify-center">
     

<div className="relative w-[500px] h-[200px] flex justify-center items-center">
  {items.map((item, index) => {
    let offset = index - active;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (Math.abs(offset) > 2) return null;

    return (
      <div
        key={index}
        onClick={() => setActive(index)}
        className="absolute cursor-pointer transition-all duration-500"
        style={{
          transform: `
            translateX(${offset * 120}px)
            translateY(${Math.abs(offset) * 25}px)
            scale(${offset === 0 ? 1.2 : 0.8})
          `,
          zIndex: 10 - Math.abs(offset),
          filter: offset === 0 ? "blur(0px)" : "blur(3px)",
          opacity: offset === 0 ? 1 : 0.6,
        }}
      >
        <div className="w-24 h-24 flex items-center justify-center bg-blue-300 rounded-xl shadow-md">
          {item}
        </div>
      </div>
    );
  })}
</div>
      </section>
    </div>
  );
}
