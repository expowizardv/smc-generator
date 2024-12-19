"use client";

import { ContentItem } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Calendar, Twitter, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import { getPlatformIcon } from '@/lib/platform-utils';
import { formatDateTime } from '@/lib/date-utils';

interface ContentItemCardProps {
  item: ContentItem;
}

export function ContentItemCard({ item }: ContentItemCardProps) {
  const PlatformIcon = getPlatformIcon(item.platform);

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <PlatformIcon className={`h-5 w-5 ${item.platform === 'Twitter' ? 'text-blue-400' : 'text-blue-700'}`} />
            <span className="text-sm font-medium text-gray-600">
              {item.platform}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.content}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{formatDateTime(item.scheduledDate)}</span>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize bg-orange-100 text-orange-800">
          {item.status}
        </span>
      </div>
    </Card>
  );
}