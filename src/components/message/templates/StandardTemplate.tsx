import { cn } from "@/lib/utils";
import { MessageTemplateProps } from "./types";

export const StandardTemplate = ({ data, isGradientTemplate }: MessageTemplateProps & { isGradientTemplate: boolean }) => {
  return (
    <div className="p-4 md:p-8">
      {data.image && (
        <img
          src={data.image}
          alt={data.title || ""}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className={cn(
        "text-3xl md:text-5xl font-bold mb-6",
        isGradientTemplate ? "text-white" : ""
      )}>
        {data.title}
      </h1>
      <p className={cn(
        "text-lg md:text-xl whitespace-pre-wrap",
        isGradientTemplate ? "text-white" : ""
      )}>
        {data.message}
      </p>
    </div>
  );
};