import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const StaticPrerender = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecentMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (data) {
        setMessages(data);
      }
    };

    fetchRecentMessages();
  }, []);

  // This content will be rendered in the HTML source for search engines
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      <div itemScope itemType="https://schema.org/WebApplication">
        <meta itemProp="name" content="UnMensaje.com" />
        <meta itemProp="description" content="Create and share beautiful messages with QR codes" />
        
        <div itemScope itemType="https://schema.org/CreativeWork">
          <h2>Recent Messages</h2>
          {messages.map((msg) => (
            <article key={msg.id}>
              <h3>{msg.title}</h3>
              <p>{msg.message}</p>
              <meta itemProp="dateCreated" content={msg.created_at} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};