import { MessageForm } from "@/components/MessageForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";
import { QrCode, Share2, Palette, Globe2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MessageCounter } from "@/components/MessageCounter";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background transition-colors py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end gap-2 mb-8">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <Logo />

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('createMessage')}
          </h2>
          <p className="text-foreground text-lg">
            {t('designBeautiful')}
          </p>
        </div>

        <MessageForm />
        
        <MessageCounter />
        
        {/* Features Section */}
        <section className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('shareInStyle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QR Code Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('instantQR')}</h3>
              <p className="text-muted-foreground">{t('instantQRDesc')}</p>
            </div>

            {/* Design Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('beautifulTemplates')}</h3>
              <p className="text-muted-foreground">{t('beautifulTemplatesDesc')}</p>
            </div>

            {/* Easy Sharing Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('easyToShare')}</h3>
              <p className="text-muted-foreground">{t('easyToShareDesc')}</p>
            </div>

            {/* Accessibility Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('accessibleAnywhere')}</h3>
              <p className="text-muted-foreground">{t('accessibleAnywhereDesc')}</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('createAndShare')}
            </p>
          </div>
        </section>

        {/* Footer with Creator Information */}
        <footer className="mt-24 mb-8 text-center">
          <p className="text-muted-foreground">
            {t('createdBy')}{' '}
            <a 
              href="https://dragonbarbudo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-semibold transition-colors"
            >
              DragonBarbudo
            </a>
            {' '}{t('and')}{' '}
            <a 
              href="https://talachadigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-semibold transition-colors"
            >
              Talacha Digital
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;