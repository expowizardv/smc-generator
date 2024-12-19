"use client";

import { CalendarHeader } from './calendar-header';
import { CalendarGrid } from './calendar-grid';
import { CalendarSidebar } from './calendar-sidebar';

export function CalendarExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-[90%] mx-auto px-4 py-8">
        <CalendarHeader />
        <div className="mt-8 flex gap-6">
          <div className="w-1/3">
            <CalendarSidebar />
          </div>
          <div className="w-2/3">
            <CalendarGrid />
          </div>
        </div>
      </div>
    </div>
  );
}