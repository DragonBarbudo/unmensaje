import { cn } from "@/lib/utils";
import { MessageTemplateProps } from "./types";

export const MagazineTemplate = ({ data }: MessageTemplateProps) => {
  return (
    <>
      {data.image && (
        <img
          src={data.image}
          alt={data.title || ""}
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className={cn(
        "absolute bottom-0 p-4 md:p-8 w-full",
        data.font
      )}>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 whitespace-pre-wrap">
          {data.message}
        </p>
      </div>
    </>
  );
};