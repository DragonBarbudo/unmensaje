export interface MessageData {
  id: string;
  title: string | null;
  message: string;
  template: string;
  image: string | null;
  font: string;
  created_at: string;
}

export interface MessageTemplateProps {
  data: MessageData;
}