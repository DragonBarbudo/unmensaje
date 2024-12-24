import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface MessageData {
  title: string;
  message: string;
  template: string;
  image: string | null;
}

export const MessageDisplay = () => {
  const { id } = useParams();
  const [data, setData] = useState<MessageData | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      if (!id) return;
      
      const { data: message, error } = await supabase
        .from('messages')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching message:', error);
        return;
      }

      if (message) {
        setData(message);
      }
    };

    fetchMessage();
  }, [id]);

  if (!data) return <div>Message not found</div>;

  const templates = {
    minimal: "bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto",
    gradient: "gradient-purple text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto",
    magazine: "relative text-white rounded-lg shadow-xl max-w-2xl mx-auto overflow-hidden",
  };

  if (data.template === "magazine") {
    return (
      <div className={templates.magazine}>
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
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

  return (
    <div className={templates[data.template as keyof typeof templates]}>
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className={`text-4xl font-bold mb-4 ${
        data.template === "gradient" ? "text-white" : "text-gray-900"
      }`}>
        {data.title}
      </h1>
      <p className={`text-lg ${
        data.template === "gradient" ? "text-white" : "text-gray-700"
      }`}>
        {data.message}
      </p>
    </div>
  );
};