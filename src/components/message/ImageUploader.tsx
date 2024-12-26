import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ImagePlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface ImageUploaderProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export const ImageUploader = ({ image, onImageChange }: ImageUploaderProps) => {
  const { t } = useTranslation();

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
  );
};