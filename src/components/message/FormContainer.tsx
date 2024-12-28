import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MessageFormContent } from "./MessageFormContent";
import { MessagePreview } from "../MessagePreview";

export const FormContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("minimal");
  const [image, setImage] = useState<string | null>(null);
  const [font, setFont] = useState("font-inter");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const editMessage = location.state?.editMessage;
    if (editMessage) {
      setTitle(editMessage.title || "");
      setMessage(editMessage.message || "");
      setTemplate(editMessage.template || "minimal");
      setImage(editMessage.image || null);
      setFont(editMessage.font || "font-inter");
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <MessageFormContent
        title={title}
        message={message}
        template={template}
        image={image}
        font={font}
        isLoading={isLoading}
        isOpen={isOpen}
        onTitleChange={setTitle}
        onMessageChange={setMessage}
        onTemplateChange={setTemplate}
        onImageChange={setImage}
        onFontChange={setFont}
        onOpenChange={setIsOpen}
        setIsLoading={setIsLoading}
        navigate={navigate}
      />

      <div className="bg-card rounded-2xl p-8 shadow-xl dark:shadow-none sticky top-8 order-2 md:order-none">
        <MessagePreview
          title={title}
          message={message}
          template={template}
          image={image}
          font={font}
        />
      </div>
    </div>
  );
};