import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-2">Content Calendar</h1>
        <p className="text-gray-600">Your optimized social media schedule for maximum engagement</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Month
        </Button>
      </div>
    </div>
  );
}