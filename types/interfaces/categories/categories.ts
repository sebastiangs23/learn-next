import type { StaticImageData } from "next/image";


export interface Category {
    id: string;
    image: StaticImageData | null ;
    className?: string;
}