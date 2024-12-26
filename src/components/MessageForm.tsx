import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MessagePreview } from "./MessagePreview";
import { Send, Loader2, Settings2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TitleInput } from "./message/TitleInput";
import { MessageTextarea } from "./message/MessageTextarea";
import { TemplateSelector } from "./message/TemplateSelector";
import { ImageUploader } from "./message/ImageUploader";
import { FontSelector } from "./message/FontSelector";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const MessageForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);
  const [font, setFont] = useState("font-inter");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-8 bg-card text-card-foreground rounded-2xl p-4 md:p-8 shadow-xl dark:shadow-none">
        <div className="space-y-4">
          <TitleInput value={title} onChange={setTitle} />
          <MessageTextarea value={message} onChange={setMessage} />
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-4"
          >
            <CollapsibleTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Settings2 className="h-4 w-4" />
                {t('moreOptions')}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4">
              <TemplateSelector value={template} onChange={setTemplate} />
              <FontSelector value={font} onChange={setFont} />
              <ImageUploader image={image} onImageChange={setImage} />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Send className="mr-2 h-5 w-5" />
          )}
          {t('createButton')}
        </Button>
      </form>

      <div className="sticky top-6 hidden lg:block">
        <h2 className="text-lg font-semibold mb-4 text-foreground">{t('preview')}</h2>
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
    </div>
  );
};