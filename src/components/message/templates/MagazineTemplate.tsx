import { cn } from "@/lib/utils";
import { MessageTemplateProps } from "./types";

export const MagazineTemplate = ({ data }: MessageTemplateProps) => {
  return (
    <>
      {data.image && (
        <img
          src={data.image}
          alt={data.title || ""}
          className="w-full h-[500px] object-cover"
        />
      )}
      <div className="absolute inset-0 gradient-overlay" />
      <div className={cn("absolute bottom-0 p-8 w-full", data.font)}>
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg">{data.message}</p>
      </div>
    </>
  );
};