import QRCode from "react-qr-code";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ShareViewProps {
  messageId: string;
}

export const ShareView = ({ messageId }: ShareViewProps) => {
  const shareUrl = `${window.location.origin}/message/${messageId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <QRCode
          value={shareUrl}
          className="w-full h-auto max-w-[300px] mx-auto mb-6"
        />
        <div className="space-y-4">
          <p className="text-sm text-gray-500 break-all">{shareUrl}</p>
          <Button onClick={copyToClipboard} className="w-full">
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
};