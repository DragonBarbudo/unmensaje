import { Button } from "../ui/button";
import { Send, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FormActionsProps {
  isLoading: boolean;
}

export const FormActions = ({ isLoading }: FormActionsProps) => {
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl"
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Send className="mr-2 h-5 w-5" />
      )}
      {t('createButton')}
    </Button>
  );
};