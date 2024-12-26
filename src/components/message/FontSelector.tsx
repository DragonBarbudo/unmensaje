import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const fonts = [
  { name: 'Playfair Display', value: 'font-playfair', googleFont: 'Playfair+Display' },
  { name: 'Montserrat', value: 'font-montserrat', googleFont: 'Montserrat' },
  { name: 'Lora', value: 'font-lora', googleFont: 'Lora' },
  { name: 'Source Sans 3', value: 'font-source', googleFont: 'Source+Sans+3' },
];

export const FontSelector = ({ value, onChange }: FontSelectorProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?${fonts.map(font => `family=${font.googleFont}`).join('&')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="space-y-3">
      <Label className="text-lg font-medium">{t('chooseFont')}</Label>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={onChange}
        className="flex flex-wrap gap-2"
      >
        {fonts.map((font) => (
          <ToggleGroupItem
            key={font.value}
            value={font.value}
            className={`flex-1 min-w-[120px] h-16 ${font.value}`}
            style={{ fontFamily: font.name }}
          >
            {font.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};