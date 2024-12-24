import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const MessageForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
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

      <div className="space-y-2">
        <Label htmlFor="image">Upload Image (Optional)</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer"
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mt-2 rounded-md max-h-40 object-cover"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label>Select Template</Label>
        <RadioGroup
          value={template}
          onValueChange={setTemplate}
          className="grid grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minimal" id="minimal" />
            <Label htmlFor="minimal">Minimal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gradient" id="gradient" />
            <Label htmlFor="gradient">Gradient</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="magazine" id="magazine" />
            <Label htmlFor="magazine">Magazine</Label>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full">
        Create Message
      </Button>
    </form>
  );
};