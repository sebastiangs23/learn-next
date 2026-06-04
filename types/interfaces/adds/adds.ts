export type CarouselSlide = {
  id: string | number;
  type: "image" | "video";
  src: string;
  alt?: string;
};

export interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayDelay?: number;
  height?: string;
}