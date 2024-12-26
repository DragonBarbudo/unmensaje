import { MessageForm } from "@/components/MessageForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Create Your Message
          </h1>
          <p className="text-gray-600 text-lg">
            Design beautiful messages to share with anyone
          </p>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Index;