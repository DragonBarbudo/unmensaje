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
        "chooseFont": "Choose Font"
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
        "chooseFont": "Elegir Fuente"
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
        "chooseFont": "Choisir la Police"
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
