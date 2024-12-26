import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  { name: 'Merriweather', value: 'font-merriweather', googleFont: 'Merriweather' },
  { name: 'Roboto Slab', value: 'font-roboto-slab', googleFont: 'Roboto+Slab' },
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
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {fonts.map((font) => (
          <div key={font.value} className="relative">
            <RadioGroupItem value={font.value} id={font.value} className="peer sr-only" />
            <Label
              htmlFor={font.value}
              className={`flex items-center justify-center h-24 rounded-xl border-2 border-input bg-background p-4 hover:bg-muted peer-checked:border-primary peer-checked:bg-primary/10 cursor-pointer transition-all ${font.value}`}
              style={{ fontFamily: font.name }}
            >
              {font.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};