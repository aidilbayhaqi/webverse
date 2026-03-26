import { IconType } from "react-icons";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ShowcaseCase = {
  id: number;
  title: string;
  description: string;
  image: string;

  // tambahan
  icon: IconType;
  testimonial: Testimonial;
};
