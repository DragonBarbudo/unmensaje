import { useState } from "react";
import { toast } from "sonner";
import { NavigateFunction } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import { TitleInput } from "./TitleInput";
import { MessageTextarea } from "./MessageTextarea";
import { AIImproveButton } from "./AIImproveButton";
import { AdvancedOptions } from "./AdvancedOptions";
import { FormActions } from "./FormActions";
import { isSpam } from "@/utils/antiSpam";

interface MessageFormContentProps {
  title: string;
  message: string;
  template: string;
  image: string | null;
  font: string;
  isLoading: boolean;
  isOpen: boolean;
  onTitleChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onTemplateChange: (value: string) => void;
  onImageChange: (value: string | null) => void;
  onFontChange: (value: string) => void;
  onOpenChange: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  navigate: NavigateFunction;
}

export const MessageFormContent = ({
  title,
  message,
  template,
  image,
  font,
  isLoading,
  isOpen,
  onTitleChange,
  onMessageChange,
  onTemplateChange,
  onImageChange,
  onFontChange,
  onOpenChange,
  setIsLoading,
  navigate,
}: MessageFormContentProps) => {
  const { t } = useTranslation();
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error(t("Please enter a message"));
      return;
    }

    setIsLoading(true);

    try {
      const spamCheck = await isSpam({
        title,
        message,
        honeypot,
        timestamp: formStartTime,
      });

      if (spamCheck.isSpam) {
        toast.error(t("Your message was flagged as spam. Please try again later."));
        return;
      }

      const messageData = {
        id: Date.now().toString(),
        title,
        message,
        template,
        image,
        font,
      };

      const { error } = await supabase
        .from('messages')
        .insert(messageData);

      if (error) throw error;

      navigate(`/share/${messageData.id}`);
    } catch (error) {
      console.error('Error saving message:', error);
      toast.error(t("Failed to save message. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-card text-card-foreground rounded-2xl p-4 md:p-8 shadow-xl dark:shadow-none order-1 md:order-none">
      <div className="space-y-4">
        <TitleInput value={title} onChange={onTitleChange} />
        <div className="relative">
          <MessageTextarea value={message} onChange={onMessageChange} />
          <AIImproveButton message={message} onImproved={onMessageChange} />
        </div>
        
        {/* Honeypot field - hidden from real users */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
        />
        
        <AdvancedOptions
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          template={template}
          onTemplateChange={onTemplateChange}
          font={font}
          onFontChange={onFontChange}
          image={image}
          onImageChange={onImageChange}
          message={message}
        />
      </div>

      <FormActions isLoading={isLoading} />
    </form>
  );
};