import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const fonts = [
  'font-afacad',
  'font-work-sans',
  'font-teko',
  'font-pacifico',
  'font-caveat',
  'font-acme'
];

export const Logo = () => {
  const { t } = useTranslation();
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-24">
      <h1 className={`text-4xl md:text-7xl font-bold ${fonts[currentFontIndex]} bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-500`}>
        UnMensaje.com
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto italic">
        {t('slogan')} ✨
      </p>
    </div>
  );
};