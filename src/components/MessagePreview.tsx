import { MessageDisplay } from "./MessageDisplay";
import { useTranslation } from "react-i18next";

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
    message,
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