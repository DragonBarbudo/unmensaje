import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const MessageCounter = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      const { count: messageCount } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true });
      
      setCount(messageCount || 0);
      setIsLoading(false);
    };

    fetchCount();

    // Set up realtime subscription for updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'messages'
        },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (isLoading) return null;

  return (
    <div className="w-full py-16 my-12 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl group-hover:backdrop-blur-2xl transition-all duration-500" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-4xl md:text-6xl font-bold text-white mb-2 animate-fade-in">
          {count.toLocaleString()}
        </p>
        <p className="text-xl md:text-2xl text-white/90 font-medium animate-fade-in">
          {t('messagesCreated')}
        </p>
      </div>
    </div>
  );
};