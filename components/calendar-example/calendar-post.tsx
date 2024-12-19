import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CalendarPostProps {
  title: string;
  platform: string;
  time: string;
  engagement: string;
}

export function CalendarPost({ title, platform, time, engagement }: CalendarPostProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="h-4 w-4 text-blue-400" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4 text-blue-700" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4 text-pink-600" />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (engagement.toLowerCase()) {
      case 'high':
        return 'bg-green-50 hover:bg-green-100';
      case 'medium':
        return 'bg-yellow-50 hover:bg-yellow-100';
      default:
        return 'bg-gray-50 hover:bg-gray-100';
    }
  };

  return (
    <Card className={`p-2 transition-all cursor-pointer ${getBgColor()}`}>
      <div className="flex items-center gap-2 mb-1">
        {getPlatformIcon()}
        <span className="text-xs font-medium text-gray-600">{time}</span>
      </div>
      <p className="text-sm font-medium line-clamp-2">{title}</p>
    </Card>
  );
}