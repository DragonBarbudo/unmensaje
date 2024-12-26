import { MessageForm } from "@/components/MessageForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background transition-colors py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end gap-2 mb-8">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('createMessage')}
          </h1>
          <p className="text-foreground text-lg">
            {t('designBeautiful')}
          </p>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Index;