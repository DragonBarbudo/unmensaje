import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

interface MessageData {
  id: string;
  title: string | null;
  message: string;
  template: string;
  image: string | null;
  created_at: string;
}

interface MessageDisplayProps {
  messageData?: MessageData;
}

export const MessageDisplay = ({ messageData }: MessageDisplayProps) => {
  const { id } = useParams();
  const [data, setData] = useState<MessageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      if (messageData) {
        setData(messageData);
        setIsLoading(false);
        return;
      }

      if (!id) return;
      
      try {
        const { data: message, error } = await supabase
          .from('messages')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching message:', error);
          return;
        }

        setData(message);
      } catch (error) {
        console.error('Error fetching message:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, [id, messageData]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Message not found</div>;

  const templates = {
    minimal: "bg-card text-card-foreground p-8 rounded-lg shadow-xl max-w-2xl mx-auto dark:shadow-none",
    gradient: "gradient-purple text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto",
    magazine: "relative text-white rounded-lg shadow-xl max-w-2xl mx-auto overflow-hidden",
    neon: "gradient-neon text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto backdrop-blur-sm",
    sunset: "gradient-sunset text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto",
    forest: "gradient-forest text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto glass-effect",
    ocean: "gradient-ocean text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto",
  };

  if (data.template === "magazine") {
    return (
      <div className={templates.magazine}>
        {data.image && (
          <img
            src={data.image}
            alt={data.title || ""}
            className="w-full h-[500px] object-cover"
          />
        )}
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute bottom-0 p-8 w-full">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg">{data.message}</p>
        </div>
      </div>
    );
  }

  const isGradientTemplate = data.template !== "minimal";

  return (
    <div className={cn(templates[data.template as keyof typeof templates])}>
      {data.image && (
        <img
          src={data.image}
          alt={data.title || ""}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className={`text-4xl font-bold mb-4 ${
        isGradientTemplate ? "text-white" : ""
      }`}>
        {data.title}
      </h1>
      <p className={`text-lg ${
        isGradientTemplate ? "text-white" : ""
      }`}>
        {data.message}
      </p>
    </div>
  );
};