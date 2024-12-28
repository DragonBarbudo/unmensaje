import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      slogan: "Create messages easily",
      createMessage: "Create a Message",
      designBeautiful: "Design Beautiful Messages",
      shareInStyle: "Share in Style",
      instantQR: "Instant QR Code",
      instantQRDesc: "Share your message instantly with a QR code",
      beautifulTemplates: "Beautiful Templates",
      beautifulTemplatesDesc: "Choose from a variety of beautiful templates",
      easyToShare: "Easy to Share",
      easyToShareDesc: "Share your message with anyone, anywhere",
      accessibleAnywhere: "Accessible Anywhere",
      accessibleAnywhereDesc: "Your messages are accessible from any device",
      createAndShare: "Create and share your message in seconds",
      createdBy: "Created by",
      and: "and",
      preview: "Preview",
      createButton: "Create Message",
      messagePlaceholder: "Write your message here...",
      titlePlaceholder: "Add a title (optional)",
      chooseTemplate: "Choose Template",
      chooseFont: "Choose Font",
      addImage: "Add Image",
      clickToUpload: "Click to upload",
      minimal: "Minimal",
      gradient: "Gradient",
      magazine: "Magazine",
      moreOptions: "More Options",
      "Please enter a message": "Please enter a message",
      "Failed to save message. Please try again.": "Failed to save message. Please try again.",
      "Message improved successfully!": "Message improved successfully!",
      "Failed to improve message. Please try again.": "Failed to improve message. Please try again.",
      "Please enter a message first": "Please enter a message first",
      "Improve with AI": "Improve with AI",
      "Link copied to clipboard!": "Link copied to clipboard!",
      "QR Code downloaded successfully!": "QR Code downloaded successfully!",
      "Shared successfully!": "Shared successfully!",
      "Failed to load message for editing": "Failed to load message for editing",
      "Download QR": "Download QR",
      "Share Link": "Share Link",
      "Copy Link": "Copy Link",
      "Return to Edit": "Return to Edit",
      "Live Preview": "Live Preview",
      "Check out this message I created!": "Check out this message I created!",
      "UnMensaje.com - Shared Message": "UnMensaje.com - Shared Message",
      "Here will be your awesome message": "Here will be your awesome message",
    },
  },
  es: {
    translation: {
      slogan: "Crea mensajitos fácilmente",
      createMessage: "Crear un Mensaje",
      designBeautiful: "Diseña Mensajes Bellos",
      shareInStyle: "Comparte con Estilo",
      instantQR: "Código QR Instantáneo",
      instantQRDesc: "Comparte tu mensaje al instante con un código QR",
      beautifulTemplates: "Plantillas Hermosas",
      beautifulTemplatesDesc: "Elige entre una variedad de hermosas plantillas",
      easyToShare: "Fácil de Compartir",
      easyToShareDesc: "Comparte tu mensaje con cualquiera, en cualquier lugar",
      accessibleAnywhere: "Accesible en Todas Partes",
      accessibleAnywhereDesc: "Tus mensajes son accesibles desde cualquier dispositivo",
      createAndShare: "Crea y comparte tu mensaje en segundos",
      createdBy: "Creado por",
      and: "y",
      preview: "Vista Previa",
      createButton: "Crear Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      titlePlaceholder: "Añade un título (opcional)",
      chooseTemplate: "Elegir Plantilla",
      chooseFont: "Elegir Fuente",
      addImage: "Añadir Imagen",
      clickToUpload: "Haz clic para subir",
      minimal: "Minimalista",
      gradient: "Degradado",
      magazine: "Revista",
      moreOptions: "Más Opciones",
      "Please enter a message": "Por favor, ingresa un mensaje",
      "Failed to save message. Please try again.": "Error al guardar el mensaje. Por favor, inténtalo de nuevo.",
      "Message improved successfully!": "¡Mensaje mejorado exitosamente!",
      "Failed to improve message. Please try again.": "Error al mejorar el mensaje. Por favor, inténtalo de nuevo.",
      "Please enter a message first": "Por favor, ingresa un mensaje primero",
      "Improve with AI": "Mejorar con IA",
      "Link copied to clipboard!": "¡Enlace copiado al portapapeles!",
      "QR Code downloaded successfully!": "¡Código QR descargado exitosamente!",
      "Shared successfully!": "¡Compartido exitosamente!",
      "Failed to load message for editing": "Error al cargar el mensaje para editar",
      "Download QR": "Descargar QR",
      "Share Link": "Compartir Enlace",
      "Copy Link": "Copiar Enlace",
      "Return to Edit": "Volver a Editar",
      "Live Preview": "Vista Previa",
      "Check out this message I created!": "¡Mira este mensaje que he creado!",
      "UnMensaje.com - Shared Message": "UnMensaje.com - Mensaje Compartido",
      "Here will be your awesome message": "Aquí estará tu increíble mensaje",
    },
  },
  fr: {
    translation: {
      slogan: "Créez des messages facilement",
      createMessage: "Créer un Message",
      designBeautiful: "Concevez de Beaux Messages",
      shareInStyle: "Partagez avec Style",
      instantQR: "Code QR Instantané",
      instantQRDesc: "Partagez votre message instantanément avec un code QR",
      beautifulTemplates: "Beaux Modèles",
      beautifulTemplatesDesc: "Choisissez parmi une variété de beaux modèles",
      easyToShare: "Facile à Partager",
      easyToShareDesc: "Partagez votre message avec n'importe qui, n'importe où",
      accessibleAnywhere: "Accessible Partout",
      accessibleAnywhereDesc: "Vos messages sont accessibles depuis n'importe quel appareil",
      createAndShare: "Créez et partagez votre message en quelques secondes",
      createdBy: "Créé par",
      and: "et",
      preview: "Aperçu",
      createButton: "Créer un Message",
      messagePlaceholder: "Écrivez votre message ici...",
      titlePlaceholder: "Ajoutez un titre (optionnel)",
      chooseTemplate: "Choisir un Modèle",
      chooseFont: "Choisir une Police",
      addImage: "Ajouter une Image",
      clickToUpload: "Cliquez pour télécharger",
      minimal: "Minimal",
      gradient: "Dégradé",
      magazine: "Magazine",
      moreOptions: "Plus d'Options",
      "Please enter a message": "Veuillez saisir un message",
      "Failed to save message. Please try again.": "Échec de l'enregistrement du message. Veuillez réessayer.",
      "Message improved successfully!": "Message amélioré avec succès !",
      "Failed to improve message. Please try again.": "Échec de l'amélioration du message. Veuillez réessayer.",
      "Please enter a message first": "Veuillez d'abord saisir un message",
      "Improve with AI": "Améliorer avec l'IA",
      "Link copied to clipboard!": "Lien copié dans le presse-papiers !",
      "QR Code downloaded successfully!": "Code QR téléchargé avec succès !",
      "Shared successfully!": "Partagé avec succès !",
      "Failed to load message for editing": "Échec du chargement du message pour modification",
      "Download QR": "Télécharger QR",
      "Share Link": "Partager le Lien",
      "Copy Link": "Copier le Lien",
      "Return to Edit": "Retour à l'Édition",
      "Live Preview": "Aperçu en Direct",
      "Check out this message I created!": "Regardez ce message que j'ai créé !",
      "UnMensaje.com - Shared Message": "UnMensaje.com - Message Partagé",
      "Here will be your awesome message": "Ici sera votre superbe message",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
