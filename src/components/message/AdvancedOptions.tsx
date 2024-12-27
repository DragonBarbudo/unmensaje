import { Settings2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TemplateSelector } from "./TemplateSelector";
import { FontSelector } from "./FontSelector";
import { ImageUploader } from "./ImageUploader";

interface AdvancedOptionsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  template: string;
  onTemplateChange: (template: string) => void;
  font: string;
  onFontChange: (font: string) => void;
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export const AdvancedOptions = ({
  isOpen,
  onOpenChange,
  template,
  onTemplateChange,
  font,
  onFontChange,
  image,
  onImageChange,
}: AdvancedOptionsProps) => {
  const { t } = useTranslation();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={onOpenChange}
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
        <TemplateSelector value={template} onChange={onTemplateChange} />
        <FontSelector value={font} onChange={onFontChange} />
        <ImageUploader image={image} onImageChange={onImageChange} />
      </CollapsibleContent>
    </Collapsible>
  );
};