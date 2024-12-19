import { ContentItem } from '@/types/content';

export interface GeneratedCalendar {
  items: ContentItem[];
  summary: string;
}

export async function generateCalendar(prompt: string): Promise<GeneratedCalendar> {
  // Mock implementation - replace with actual AI service later
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const currentDate = new Date();
  const items: ContentItem[] = [];
  
  for (let i = 0; i < 10; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i * 2);
    
    items.push({
      id: `item-${i}`,
      title: `Content Item ${i + 1}`,
      content: `Generated content for day ${i + 1}`,
      platform: i % 2 === 0 ? 'Twitter' : 'LinkedIn',
      scheduledDate: date.toISOString(),
      status: 'draft'
    });
  }
  
  return {
    items,
    summary: 'Generated calendar based on your requirements'
  };
}