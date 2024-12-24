import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

interface ImageUploadProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

export const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
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
        setImage(webpImage);
        toast.success("Image optimized successfully!");
      } catch (error) {
        console.error('Error optimizing image:', error);
        toast.error("Failed to optimize image. Please try again.");
      }
    }
  };

  return (
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
  );
};