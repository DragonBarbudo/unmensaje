import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { templates } from "./message/templates/styles";
import { MagazineTemplate } from "./message/templates/MagazineTemplate";
import { StandardTemplate } from "./message/templates/StandardTemplate";
import { MessageData } from "./message/templates/types";
import { Loader2 } from "lucide-react";

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

        if (message) {
          setData({
            ...message,
            font: message.font || 'font-inter'
          } as MessageData);
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, [id, messageData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (!data) return <div className="text-center p-4">Message not found</div>;

  const templateStyle = templates[data.template as keyof typeof templates] || templates.minimal;
  const isGradientTemplate = !["minimal", "magazine"].includes(data.template);

  return (
    <div className={cn(
      templateStyle,
      data.font,
      "relative min-h-[200px] transition-all duration-300"
    )}>
      {data.template === "magazine" ? (
        <MagazineTemplate data={data} />
      ) : (
        <StandardTemplate data={data} isGradientTemplate={isGradientTemplate} />
      )}
    </div>
  );
};