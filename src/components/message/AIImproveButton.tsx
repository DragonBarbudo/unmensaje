import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface AIImproveButtonProps {
  message: string;
  onImproved: (text: string) => void;
}

export const AIImproveButton = ({ message, onImproved }: AIImproveButtonProps) => {
  const { t } = useTranslation();
  const [isImproving, setIsImproving] = useState(false);

  const improveWithAI = async () => {
    if (!message) {
      toast.error(t("Please enter a message first"));
      return;
    }

    setIsImproving(true);
    try {
      const { data, error } = await supabase.functions.invoke('improve-message', {
        body: { message }
      });

      if (error) throw error;

      onImproved(data.improvedText);
      toast.success(t("Message improved successfully!"));
    } catch (error) {
      console.error('Error improving message:', error);
      toast.error(t("Failed to improve message. Please try again."));
    } finally {
      setIsImproving(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="absolute right-2 top-2 bg-background"
      onClick={improveWithAI}
      disabled={isImproving || !message}
    >
      {isImproving ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      {t('Improve with AI')}
    </Button>
  );
};