import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MessagePreview } from "./MessagePreview";
import { useTranslation } from "react-i18next";
import { TitleInput } from "./message/TitleInput";
import { MessageTextarea } from "./message/MessageTextarea";
import { AIImproveButton } from "./message/AIImproveButton";
import { AdvancedOptions } from "./message/AdvancedOptions";
import { FormActions } from "./message/FormActions";

export const MessageForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);
  const [font, setFont] = useState("font-inter");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const editMessage = location.state?.editMessage;
    if (editMessage) {
      setTitle(editMessage.title || "");
      setMessage(editMessage.message || "");
      setTemplate(editMessage.template || "minimal");
      setImage(editMessage.image || null);
      setFont(editMessage.font || "font-inter");
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error(t("Please enter a message"));
      return;
    }

    setIsLoading(true);
    const messageData = {
      id: Date.now().toString(),
      title,
      message,
      template,
      image,
      font,
    };

    try {
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
    <div className="grid grid-cols-1 gap-8">
      <form onSubmit={handleSubmit} className="space-y-8 bg-card text-card-foreground rounded-2xl p-4 md:p-8 shadow-xl dark:shadow-none">
        <div className="space-y-4">
          <TitleInput value={title} onChange={setTitle} />
          <div className="relative">
            <MessageTextarea value={message} onChange={setMessage} />
            <AIImproveButton message={message} onImproved={setMessage} />
          </div>
          
          <AdvancedOptions
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            template={template}
            onTemplateChange={setTemplate}
            font={font}
            onFontChange={setFont}
            image={image}
            onImageChange={setImage}
            message={message}
          />
        </div>

        <FormActions isLoading={isLoading} />
      </form>

      <div className="bg-card rounded-2xl p-8 shadow-xl dark:shadow-none">
        <MessagePreview
          title={title}
          message={message}
          template={template}
          image={image}
          font={font}
        />
      </div>
    </div>
  );
};