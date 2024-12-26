import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      whereMessagesBecome: "Where messages become magical moments",
      createMessage: "Create a Message",
      designBeautiful: "Design Beautiful Messages",
      instantQR: "Instant QR Code",
      instantQRDesc: "Generate a QR code for your message instantly.",
      beautifulTemplates: "Beautiful Templates",
      beautifulTemplatesDesc: "Choose from a variety of beautiful templates.",
      easyToShare: "Easy to Share",
      easyToShareDesc: "Share your messages effortlessly.",
      accessibleAnywhere: "Accessible Anywhere",
      accessibleAnywhereDesc: "Access your messages from anywhere.",
      createAndShare: "Create and share your messages with the world!",
      createdBy: "Created by",
      and: "and",
    },
  },
  es: {
    translation: {
      whereMessagesBecome: "Donde los mensajes se convierten en momentos mágicos",
      createMessage: "Crear un Mensaje",
      designBeautiful: "Diseña Mensajes Bellos",
      instantQR: "Código QR Instantáneo",
      instantQRDesc: "Genera un código QR para tu mensaje al instante.",
      beautifulTemplates: "Plantillas Bellas",
      beautifulTemplatesDesc: "Elige entre una variedad de plantillas hermosas.",
      easyToShare: "Fácil de Compartir",
      easyToShareDesc: "Comparte tus mensajes sin esfuerzo.",
      accessibleAnywhere: "Accesible Desde Cualquier Lugar",
      accessibleAnywhereDesc: "Accede a tus mensajes desde cualquier lugar.",
      createAndShare: "¡Crea y comparte tus mensajes con el mundo!",
      createdBy: "Creado por",
      and: "y",
    },
  },
  fr: {
    translation: {
      whereMessagesBecome: "Où les messages deviennent des moments magiques",
      createMessage: "Créer un Message",
      designBeautiful: "Concevez de Beaux Messages",
      instantQR: "Code QR Instantané",
      instantQRDesc: "Générez un code QR pour votre message instantanément.",
      beautifulTemplates: "Beaux Modèles",
      beautifulTemplatesDesc: "Choisissez parmi une variété de beaux modèles.",
      easyToShare: "Facile à Partager",
      easyToShareDesc: "Partagez vos messages sans effort.",
      accessibleAnywhere: "Accessible Partout",
      accessibleAnywhereDesc: "Accédez à vos messages de n'importe où.",
      createAndShare: "Créez et partagez vos messages avec le monde !",
      createdBy: "Créé par",
      and: "et",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
