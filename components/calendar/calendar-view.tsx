"use client";

import { GeneratedCalendar } from '@/lib/calendar-service';
import { CalendarHeader } from './calendar-header';
import { ContentItemCard } from './content-item-card';

interface CalendarViewProps {
  calendar: GeneratedCalendar;
}

export function CalendarView({ calendar }: CalendarViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <CalendarHeader summary={calendar.summary} />
        <div className="grid gap-6">
          {calendar.items.map((item) => (
            <ContentItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}