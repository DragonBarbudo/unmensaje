import { MessageForm } from "@/components/MessageForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Create Your Message</h1>
        <MessageForm />
      </div>
    </div>
  );
};

export default Index;