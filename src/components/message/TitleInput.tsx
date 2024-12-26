import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TitleInput = ({ value, onChange }: TitleInputProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('titlePlaceholder')}
        className="h-14 px-4 text-lg rounded-xl border-input focus:border-primary focus:ring-primary"
      />
    </div>
  );
};