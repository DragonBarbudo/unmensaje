import { MessageForm } from "@/components/MessageForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";
import { QrCode, Share2, Palette, Globe2 } from "lucide-react";

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
        
        {/* Features Section */}
        <section className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Share Your Messages in Style
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QR Code Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant QR Sharing</h3>
              <p className="text-muted-foreground">Share your message instantly through a unique QR code - perfect for gifts, events, or special occasions.</p>
            </div>

            {/* Design Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
              <p className="text-muted-foreground">Choose from our collection of stunning templates and fonts to make your message truly unique.</p>
            </div>

            {/* Easy Sharing Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Share</h3>
              <p className="text-muted-foreground">Generate a unique link or QR code that can be shared anywhere - perfect for both digital and physical sharing.</p>
            </div>

            {/* Accessibility Feature */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessible Anywhere</h3>
              <p className="text-muted-foreground">Your messages are accessible from any device, making it perfect for leaving thoughtful notes or important information.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create, design, and share your message in seconds. Whether it's a love note, a thank you message, or important information - make it special with our beautiful templates and instant QR sharing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;