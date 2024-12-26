import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

interface MessageTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export const MessageTextarea = ({ value, onChange }: MessageTextareaProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('messagePlaceholder')}
        required
        className="min-h-[200px] px-4 py-3 text-lg rounded-xl border-input focus:border-primary focus:ring-primary resize-none"
      />
    </div>
  );
};