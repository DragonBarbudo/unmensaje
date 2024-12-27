import { ThemeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import { QRCodeSection } from "./share/QRCodeSection";
import { ShareActions } from "./share/ShareActions";
import { toast } from "sonner";

interface ShareViewProps {
  messageId: string;
}

export const ShareView = ({ messageId }: ShareViewProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const shareUrl = `${window.location.origin}/message/${messageId}`;
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success(t("Link copied to clipboard!"));
  };

  const downloadQR = () => {
    const svg = document.querySelector('.qr-code svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `unmensaje-qr-${messageId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
      
      toast.success(t("QR Code downloaded successfully!"));
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const shareMessage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t("UnMensaje.com - Shared Message"),
          text: t("Check out this message I created!"),
          url: shareUrl
        });
        toast.success(t("Shared successfully!"));
      } catch (err) {
        console.error('Error sharing:', err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const handleReturn = async () => {
    setIsLoading(true);
    try {
      const { data: message, error } = await supabase
        .from('messages')
        .select('*')
        .eq('id', messageId)
        .single();
      
      if (error) throw error;
      
      navigate('/', { 
        state: { 
          editMessage: message 
        }
      });
    } catch (error) {
      console.error('Error fetching message:', error);
      toast.error(t("Failed to load message for editing"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      
      <div className="bg-card p-6 rounded-lg shadow-lg dark:shadow-none space-y-6">
        <QRCodeSection shareUrl={shareUrl} />
        <ShareActions
          shareUrl={shareUrl}
          onDownloadQR={downloadQR}
          onShare={shareMessage}
          onCopyLink={copyToClipboard}
          onReturn={handleReturn}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};