import { MessageDisplay } from "./MessageDisplay";
import { useTranslation } from "react-i18next";
import { Edit } from "lucide-react";

interface PreviewProps {
  title: string;
  message: string;
  template: string;
  image: string | null;
  font: string;
}

export const MessagePreview = ({ title, message, template, image, font }: PreviewProps) => {
  const { t } = useTranslation();
  
  const previewData = {
    id: "preview",
    title,
    message: message || (
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <Edit className="w-12 h-12 text-muted-foreground animate-pulse" />
        <span className="text-2xl font-bold text-muted-foreground">
          {t("Here will be your awesome message")}
        </span>
      </div>
    ),
    template,
    image,
    font,
    created_at: new Date().toISOString(),
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">{t("Live Preview")}</h2>
      <MessageDisplay messageData={previewData} />
    </div>
  );
};