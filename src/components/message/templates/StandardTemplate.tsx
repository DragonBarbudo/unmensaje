import { cn } from "@/lib/utils";
import { MessageTemplateProps } from "./types";

export const StandardTemplate = ({ data, isGradientTemplate }: MessageTemplateProps & { isGradientTemplate: boolean }) => {
  return (
    <>
      {data.image && (
        <img
          src={data.image}
          alt={data.title || ""}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className={cn("text-4xl font-bold mb-4", isGradientTemplate ? "text-white" : "")}>
        {data.title}
      </h1>
      <p className={cn("text-lg", isGradientTemplate ? "text-white" : "")}>
        {data.message}
      </p>
    </>
  );
};