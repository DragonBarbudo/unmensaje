import { Download, Share2, Edit } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface ShareActionsProps {
  shareUrl: string;
  onDownloadQR: () => void;
  onShare: () => void;
  onCopyLink: () => void;
  onReturn: () => void;
  isLoading: boolean;
}

export const ShareActions = ({
  shareUrl,
  onDownloadQR,
  onShare,
  onCopyLink,
  onReturn,
  isLoading
}: ShareActionsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground break-all">{shareUrl}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={onDownloadQR}
          variant="outline"
          className="w-full"
        >
          <Download className="mr-2 h-4 w-4" />
          {t("Download QR")}
        </Button>
        
        <Button 
          onClick={onShare}
          variant="outline"
          className="w-full"
        >
          <Share2 className="mr-2 h-4 w-4" />
          {t("Share Link")}
        </Button>
      </div>
      
      <Button 
        onClick={onCopyLink} 
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      >
        {t("Copy Link")}
      </Button>

      <Button
        onClick={onReturn}
        variant="outline"
        className="w-full"
        disabled={isLoading}
      >
        <Edit className="mr-2 h-4 w-4" />
        {t("Return to Edit")}
      </Button>
    </div>
  );
};