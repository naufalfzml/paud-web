"use client";

import React, { useCallback, createContext, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselContext = createContext<any>(null);

interface CarouselProps {
  children: React.ReactNode;
  opts?: EmblaOptionsType;
  className?: string;
}

export const Carousel = ({ children, opts, className }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...opts });

  return (
    <CarouselContext.Provider value={emblaApi}>
      <div className={`relative ${className || ""}`}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </CarouselContext.Provider>
  );
};

interface CarouselContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CarouselContent = ({
  className = "",
  children,
}: CarouselContentProps) => {
  return <>{children}</>;
};

interface CarouselItemProps {
  className?: string;
  children: React.ReactNode;
}

export const CarouselItem = ({
  className = "",
  children,
}: CarouselItemProps) => {
  return (
    <div
      className={`min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export const CarouselPrevious = () => {
  const emblaApi = useContext(CarouselContext);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white rounded-full p-2 shadow hover:bg-purple-100 z-10"
      onClick={scrollPrev}
      aria-label="Previous Slide"
    >
      <ChevronLeft className="w-5 h-5 text-purple-600" />
    </button>
  );
};

export const CarouselNext = () => {
  const emblaApi = useContext(CarouselContext);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-14 bg-white rounded-full p-2 shadow hover:bg-purple-100 z-10"
      onClick={scrollNext}
      aria-label="Next Slide"
    >
      <ChevronRight className="w-5 h-5 text-purple-600" />
    </button>
  );
};
