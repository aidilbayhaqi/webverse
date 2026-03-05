import Image from "next/image";
import type { ShowcaseCase } from "./ShowcaseTypes";

type PreviewPanelProps = {
  cases: ShowcaseCase[];
  activeIndex: number;
};

export default function PreviewPanel({
  cases,
  activeIndex,
}: PreviewPanelProps) {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="sticky top-32 h-[500px] w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        {cases.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className={`object-contain transition-all duration-500
              ${
                index === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
