import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, Wand2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ImageUploaderProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
  message: string;
}

export const ImageUploader = ({ image, onImageChange, message }: ImageUploaderProps) => {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);

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
        onImageChange(webpImage);
        toast.success("Image optimized successfully!");
      } catch (error) {
        console.error('Error optimizing image:', error);
        toast.error("Failed to optimize image. Please try again.");
      }
    }
  };

  const generateImage = async () => {
    if (!message) {
      toast.error(t("Please enter a message first"));
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt: message }
      });

      if (error) throw error;

      const response = await fetch(data.imageUrl);
      const blob = await response.blob();
      const file = new File([blob], "generated-image.webp", { type: "image/webp" });
      const webpImage = await convertToWebP(file);
      
      onImageChange(webpImage);
      toast.success(t("Image generated successfully!"));
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error(t("Failed to generate image. Please try again."));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
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
        <div className="flex gap-2 mb-2">
          <Label
            htmlFor="image-upload"
            className="flex-1 flex items-center justify-center h-10 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all"
          >
            <ImagePlus className="h-5 w-5 mr-2" />
            <span>{t('Upload Image')}</span>
          </Label>
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={generateImage}
            disabled={isGenerating || !message}
          >
            <Wand2 className="h-5 w-5 mr-2" />
            {isGenerating ? t('Generating...') : t('Generate with AI')}
          </Button>
        </div>
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Preview"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};
