import { MessageDisplay } from "@/components/MessageDisplay";

const Message = () => {
  return (
    <div className="min-h-screen bg-background fixed inset-0 overflow-auto">
      <div className="container py-12">
        <MessageDisplay />
      </div>
    </div>
  );
};

export default Message;