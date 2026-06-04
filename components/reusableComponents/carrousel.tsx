"use client";

import { useEffect, useRef, useState } from "react";
import type { CarouselProps } from "@/types/interfaces/adds/adds";

export default function Carousel({
  slides,
  autoPlayDelay = 2000,
  height
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const goToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const slideWidth = container.clientWidth;

    container.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    if (!slides?.length) return;

    const interval = setInterval(() => {
      const nextIndex = activeIndex === slides?.length - 1 ? 0 : activeIndex + 1;
      goToSlide(nextIndex);
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [activeIndex, slides?.length, autoPlayDelay]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || !isDragging.current) return;

    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const walk = x - startX.current;

    container.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full px-4 mb-1">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="flex cursor-grab snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {slides?.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full snap-center overflow-hidden rounded-2xl"
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt || "carousel image"}
                draggable={false}
                className="w-full rounded-2xl object-cover"
                style={{ height: height }}
              />
            ) : (
              <video
                src={slide.src}
                muted
                loop
                autoPlay
                playsInline
                className="h-37.5 w-full rounded-2xl object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {slides?.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-5 bg-gray-400"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}