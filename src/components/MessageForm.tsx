import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MessagePreview } from "./MessagePreview";
import { ImagePlus, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export const MessageForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);

  const convertToWebP = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        
        ctx.drawImage(img, 0, 0);
        
        // Convert to WebP with 0.8 quality (good balance between quality and size)
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            } else {
              reject(new Error('Failed to convert image to WebP'));
            }
          },
          'image/webp',
          0.8
        );
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpImage = await convertToWebP(file);
        setImage(webpImage);
        toast.success("Image optimized successfully!");
      } catch (error) {
        console.error('Error optimizing image:', error);
        toast.error("Failed to optimize image. Please try again.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error(t("Please enter a message"));
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
      toast.error(t("Failed to save message. Please try again."));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-2xl p-8 shadow-xl">
        <div className="space-y-4">
          <div className="relative">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('titlePlaceholder')}
              className="h-14 px-4 text-lg rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('messagePlaceholder')}
              required
              className="min-h-[200px] px-4 py-3 text-lg rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-medium text-gray-700">{t('chooseTemplate')}</Label>
            <RadioGroup
              value={template}
              onValueChange={setTemplate}
              className="grid grid-cols-3 gap-4"
            >
              <div className="relative">
                <RadioGroupItem
                  value="minimal"
                  id="minimal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="minimal"
                  className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-purple-500 peer-checked:bg-purple-50 cursor-pointer transition-all"
                >
                  <Sparkles className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm font-medium">{t('minimal')}</span>
                </Label>
              </div>
              <div className="relative">
                <RadioGroupItem
                  value="gradient"
                  id="gradient"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="gradient"
                  className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-purple-500 peer-checked:bg-purple-50 cursor-pointer transition-all"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-2" />
                  <span className="text-sm font-medium">{t('gradient')}</span>
                </Label>
              </div>
              <div className="relative">
                <RadioGroupItem
                  value="magazine"
                  id="magazine"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="magazine"
                  className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-purple-500 peer-checked:bg-purple-50 cursor-pointer transition-all"
                >
                  <ImagePlus className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm font-medium">{t('magazine')}</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-medium text-gray-700">{t('addImage')}</Label>
            <div className="relative">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <Label
                htmlFor="image-upload"
                className="flex items-center justify-center h-32 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <ImagePlus className="h-8 w-8 mb-2" />
                    <span>{t('clickToUpload')}</span>
                  </div>
                )}
              </Label>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl"
        >
          <Send className="mr-2 h-5 w-5" /> {t('createButton')}
        </Button>
      </form>

      <div className="sticky top-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">{t('preview')}</h2>
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <MessagePreview
            title={title}
            message={message}
            template={template}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};