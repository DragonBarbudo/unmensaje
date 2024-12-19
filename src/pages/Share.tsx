import { ShareView } from "@/components/ShareView";
import { MessageDisplay } from "@/components/MessageDisplay";
import { useParams } from "react-router-dom";

const Share = () => {
  const { id } = useParams();
  if (!id) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container space-y-12">
        <MessageDisplay />
        <ShareView messageId={id} />
      </div>
    </div>
  );
};

export default Share;