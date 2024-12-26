import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: {
        "createMessage": "Create Your Message",
        "designBeautiful": "Design beautiful messages to share with anyone",
        "title": "Title",
        "titlePlaceholder": "Enter title (optional)",
        "message": "Message",
        "messagePlaceholder": "Write your message...",
        "chooseTemplate": "Choose Template",
        "minimal": "Minimal",
        "gradient": "Gradient",
        "magazine": "Magazine",
        "addImage": "Add Image (Optional)",
        "clickToUpload": "Click to upload image",
        "preview": "Preview",
        "createButton": "Create Message",
        "chooseFont": "Choose Font",
        "shareInStyle": "Share Your Messages in Style",
        "instantQR": "Instant QR Sharing",
        "instantQRDesc": "Share your message instantly through a unique QR code - perfect for gifts, events, or special occasions.",
        "beautifulTemplates": "Beautiful Templates",
        "beautifulTemplatesDesc": "Choose from our collection of stunning templates and fonts to make your message truly unique.",
        "easyToShare": "Easy to Share",
        "easyToShareDesc": "Generate a unique link or QR code that can be shared anywhere - perfect for both digital and physical sharing.",
        "accessibleAnywhere": "Accessible Anywhere",
        "accessibleAnywhereDesc": "Your messages are accessible from any device, making it perfect for leaving thoughtful notes or important information.",
        "createAndShare": "Create, design, and share your message in seconds. Whether it's a love note, a thank you message, or important information - make it special with our beautiful templates and instant QR sharing.",
        "createdBy": "Created with ❤️ by",
        "and": "and"
      }
    },
    es: {
      translations: {
        "createMessage": "Crea tu Mensaje",
        "designBeautiful": "Diseña hermosos mensajes para compartir con cualquiera",
        "title": "Título",
        "titlePlaceholder": "Ingresa título (opcional)",
        "message": "Mensaje",
        "messagePlaceholder": "Escribe tu mensaje...",
        "chooseTemplate": "Elige una Plantilla",
        "minimal": "Minimalista",
        "gradient": "Degradado",
        "magazine": "Revista",
        "addImage": "Agregar Imagen (Opcional)",
        "clickToUpload": "Haz clic para subir imagen",
        "preview": "Vista Previa",
        "createButton": "Crear Mensaje",
        "chooseFont": "Elegir Fuente",
        "shareInStyle": "Comparte tus Mensajes con Estilo",
        "instantQR": "Compartir QR Instantáneo",
        "instantQRDesc": "Comparte tu mensaje instantáneamente a través de un código QR único - perfecto para regalos, eventos u ocasiones especiales.",
        "beautifulTemplates": "Plantillas Hermosas",
        "beautifulTemplatesDesc": "Elige entre nuestra colección de plantillas y fuentes impresionantes para hacer tu mensaje verdaderamente único.",
        "easyToShare": "Fácil de Compartir",
        "easyToShareDesc": "Genera un enlace único o código QR que se puede compartir en cualquier lugar - perfecto para compartir digital y físicamente.",
        "accessibleAnywhere": "Accesible en Cualquier Lugar",
        "accessibleAnywhereDesc": "Tus mensajes son accesibles desde cualquier dispositivo, perfecto para dejar notas thoughtful o información importante.",
        "createAndShare": "Crea, diseña y comparte tu mensaje en segundos. Ya sea una nota de amor, un mensaje de agradecimiento o información importante - hazlo especial con nuestras hermosas plantillas y compartir QR instantáneo.",
        "createdBy": "Creado con ❤️ por",
        "and": "y"
      }
    },
    fr: {
      translations: {
        "createMessage": "Créez Votre Message",
        "designBeautiful": "Concevez de beaux messages à partager avec n'importe qui",
        "title": "Titre",
        "titlePlaceholder": "Entrez le titre (facultatif)",
        "message": "Message",
        "messagePlaceholder": "Écrivez votre message...",
        "chooseTemplate": "Choisissez un Modèle",
        "minimal": "Minimal",
        "gradient": "Dégradé",
        "magazine": "Magazine",
        "addImage": "Ajouter une Image (Facultatif)",
        "clickToUpload": "Cliquez pour télécharger une image",
        "preview": "Aperçu",
        "createButton": "Créer le Message",
        "chooseFont": "Choisir la Police",
        "shareInStyle": "Partagez vos Messages avec Style",
        "instantQR": "Partage QR Instantané",
        "instantQRDesc": "Partagez votre message instantanément via un code QR unique - parfait pour les cadeaux, événements ou occasions spéciales.",
        "beautifulTemplates": "Beaux Modèles",
        "beautifulTemplatesDesc": "Choisissez parmi notre collection de modèles et de polices magnifiques pour rendre votre message vraiment unique.",
        "easyToShare": "Facile à Partager",
        "easyToShareDesc": "Générez un lien unique ou un code QR qui peut être partagé n'importe où - parfait pour le partage numérique et physique.",
        "accessibleAnywhere": "Accessible Partout",
        "accessibleAnywhereDesc": "Vos messages sont accessibles depuis n'importe quel appareil, parfait pour laisser des notes réfléchies ou des informations importantes.",
        "createAndShare": "Créez, concevez et partagez votre message en quelques secondes. Que ce soit une note d'amour, un message de remerciement ou des informations importantes - rendez-le spécial avec nos beaux modèles et le partage QR instantané.",
        "createdBy": "Créé avec ❤️ par",
        "and": "et"
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
