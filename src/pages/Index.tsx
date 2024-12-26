import { MessageForm } from "@/components/MessageForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <LanguageSwitcher />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('createMessage')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t('designBeautiful')}
          </p>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Index;