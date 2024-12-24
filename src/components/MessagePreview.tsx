import { MessageDisplay } from "./MessageDisplay";

interface PreviewProps {
  title: string;
  message: string;
  template: string;
  image: string | null;
}

export const MessagePreview = ({ title, message, template, image }: PreviewProps) => {
  // Create a mock message object that matches the structure expected by MessageDisplay
  const previewData = {
    id: "preview",
    title,
    message,
    template,
    image,
    created_at: new Date().toISOString(),
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
      <MessageDisplay messageData={previewData} />
    </div>
  );
};