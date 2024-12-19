export interface ContentItem {
  id: string;
  title: string;
  content: string;
  platform: string;
  scheduledDate: string;
  status: 'draft' | 'scheduled' | 'published';
}