import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MessagePreview } from "./MessagePreview";
import { ImageUpload } from "./ImageUpload";
import { TemplateSelector } from "./TemplateSelector";

export const MessageForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error("Please enter a message");
      return;
    }

    const messageData = {
      id: Date.now().toString(),
      title,
      message,
      template,
      image,
    };

    try {
      const { error } = await supabase
        .from('messages')
        .insert(messageData);

      if (error) throw error;

      navigate(`/share/${messageData.id}`);
    } catch (error) {
      console.error('Error saving message:', error);
      toast.error("Failed to save message. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title (Optional)</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title (optional)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            required
            className="min-h-[150px]"
          />
        </div>

        <ImageUpload image={image} setImage={setImage} />
        <TemplateSelector template={template} setTemplate={setTemplate} />

        <Button type="submit" className="w-full">
          Create Message
        </Button>
      </form>

      <div className="sticky top-6">
        <MessagePreview
          title={title}
          message={message}
          template={template}
          image={image}
        />
      </div>
    </div>
  );
};