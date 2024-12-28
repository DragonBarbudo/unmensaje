import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "react-i18next";
import { ImagePlus, Send, Sparkles, Sunset, Trees, Waves, Zap, Palette } from "lucide-react";

interface TemplateSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TemplateSelector = ({ value, onChange }: TemplateSelectorProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <Label className="text-lg font-medium">{t('chooseTemplate')}</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid grid-cols-4 md:grid-cols-8 gap-2"
      >
        <div className="relative">
          <RadioGroupItem value="minimal" id="minimal" className="peer sr-only" />
          <Label
            htmlFor="minimal"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Sparkles className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="gradient" id="gradient" className="peer sr-only" />
          <Label
            htmlFor="gradient"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="magazine" id="magazine" className="peer sr-only" />
          <Label
            htmlFor="magazine"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <ImagePlus className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="neon" id="neon" className="peer sr-only" />
          <Label
            htmlFor="neon"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Zap className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="sunset" id="sunset" className="peer sr-only" />
          <Label
            htmlFor="sunset"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Sunset className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="forest" id="forest" className="peer sr-only" />
          <Label
            htmlFor="forest"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Trees className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="ocean" id="ocean" className="peer sr-only" />
          <Label
            htmlFor="ocean"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Waves className="h-6 w-6" />
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem value="experimental" id="experimental" className="peer sr-only" />
          <Label
            htmlFor="experimental"
            className="flex items-center justify-center h-12 w-12 rounded-xl border-2 border-input bg-background hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all"
          >
            <Palette className="h-6 w-6" />
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};