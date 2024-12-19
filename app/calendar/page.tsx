"use client";

import { useSearchParams } from 'next/navigation';
import { CalendarView } from '@/components/calendar/calendar-view';
import { useEffect, useState } from 'react';
import { GeneratedCalendar } from '@/lib/calendar-service';
import { Loader2 } from 'lucide-react';

export default function CalendarPage() {
  const searchParams = useSearchParams();
  const [calendar, setCalendar] = useState<GeneratedCalendar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve calendar data from localStorage (temporary solution)
    const savedCalendar = localStorage.getItem('generatedCalendar');
    if (savedCalendar) {
      setCalendar(JSON.parse(savedCalendar));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!calendar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">No calendar data found.</p>
      </div>
    );
  }

  return <CalendarView calendar={calendar} />;
}