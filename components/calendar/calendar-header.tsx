"use client";

interface CalendarHeaderProps {
  summary: string;
}

export function CalendarHeader({ summary }: CalendarHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Your Content Calendar</h1>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
}