import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const FontSelector = ({ value, onChange }: FontSelectorProps) => {
  const { t } = useTranslation();
  
  const fonts = [
    { name: 'Inter', value: 'font-inter' },
    { name: 'Playfair Display', value: 'font-playfair' },
    { name: 'Poppins', value: 'font-poppins' },
    { name: 'Roboto', value: 'font-roboto' },
    { name: 'Montserrat', value: 'font-montserrat' },
    { name: 'Lora', value: 'font-lora' },
    { name: 'Source Sans 3', value: 'font-source' },
    { name: 'Open Sans', value: 'font-opensans' },
    { name: 'Raleway', value: 'font-raleway' },
    { name: 'Nunito', value: 'font-nunito' },
  ];

  return (
    <div className="space-y-3">
      <Label className="text-lg font-medium">{t('chooseFont')}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={t('selectFont')} />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem
              key={font.value}
              value={font.value}
              className={font.value}
            >
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};