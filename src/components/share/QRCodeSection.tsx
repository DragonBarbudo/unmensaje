import QRCode from "react-qr-code";
import { useTranslation } from "react-i18next";

interface QRCodeSectionProps {
  shareUrl: string;
}

export const QRCodeSection = ({ shareUrl }: QRCodeSectionProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="qr-code bg-white p-4 rounded-lg">
      <QRCode
        value={shareUrl}
        className="w-full h-auto max-w-[300px] mx-auto"
      />
    </div>
  );
};