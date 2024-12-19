import { CalendarPost } from './calendar-post';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const EXAMPLE_POSTS = [
  {
    id: '1',
    title: 'Product Launch Announcement',
    platform: 'LinkedIn',
    time: '9:00 AM',
    engagement: 'High',
  },
  {
    id: '2',
    title: 'Customer Success Story',
    platform: 'Twitter',
    time: '2:00 PM',
    engagement: 'Medium',
  },
  {
    id: '3',
    title: 'Industry Tips & Tricks',
    platform: 'Instagram',
    time: '5:00 PM',
    engagement: 'High',
  },
];

export function CalendarGrid() {
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="grid grid-cols-7 gap-4 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-sm font-semibold text-gray-600 text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, i) => (
          <div
            key={i}
            className="min-h-[120px] border rounded-lg p-3 bg-gray-50 flex flex-col"
          >
            <div className="text-sm font-medium text-gray-500 mb-2">
              {format(day, 'd')}
            </div>
            {i % 5 === 2 && (
              <div className="flex-1">
                <CalendarPost {...EXAMPLE_POSTS[i % 3]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}