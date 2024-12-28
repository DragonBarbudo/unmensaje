import { supabase } from "@/integrations/supabase/client";

export const isSpam = async (formData: {
  title: string;
  message: string;
  honeypot: string;
  timestamp: number;
}): Promise<{ isSpam: boolean; reason?: string }> => {
  // Check honeypot field
  if (formData.honeypot) {
    return { isSpam: true, reason: "Bot detected" };
  }

  // Check if submission is too quick (less than 3 seconds)
  const timeDiff = Date.now() - formData.timestamp;
  if (timeDiff < 3000) {
    return { isSpam: true, reason: "Submission too quick" };
  }

  // Check rate limiting (5 messages per hour per IP)
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  
  const { count } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', hourAgo);

  if (count && count >= 5) {
    return { isSpam: true, reason: "Too many messages" };
  }

  return { isSpam: false };
};