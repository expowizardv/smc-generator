import { BarChart, Users, Clock, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function CalendarSidebar() {
  return (
    <div className="space-y-4">
      <Card className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-orange-500" />
          <h3 className="font-semibold">Content Summary</h3>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-orange-500 pl-3">
            <h4 className="font-medium mb-1">Week 1</h4>
            <p className="text-sm text-gray-600">Focus on product features and customer testimonials</p>
          </div>
          <div className="border-l-2 border-orange-500 pl-3">
            <h4 className="font-medium mb-1">Week 2</h4>
            <p className="text-sm text-gray-600">Industry insights and thought leadership content</p>
          </div>
          <div className="border-l-2 border-orange-500 pl-3">
            <h4 className="font-medium mb-1">Week 3</h4>
            <p className="text-sm text-gray-600">Behind-the-scenes and company culture posts</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <BarChart className="h-5 w-5 text-orange-500" />
          <h3 className="font-semibold">Analytics</h3>
        </div>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-gray-600">Posts this month:</span>
            <span className="float-right font-medium">24</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Engagement rate:</span>
            <span className="float-right font-medium">4.2%</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-5 w-5 text-orange-500" />
          <h3 className="font-semibold">Best Times</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">LinkedIn:</span>
            <span className="font-medium">9:00 AM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Twitter:</span>
            <span className="font-medium">2:00 PM</span>
          </div>
        </div>
      </Card>
    </div>
  );
}