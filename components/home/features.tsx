import { Clock, Sparkles, Share2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-orange-500" />,
    title: "Smart Generation",
    description: "Get a complete content calendar tailored to your needs in seconds"
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "Perfect Timing",
    description: "Optimal posting times based on your audience's engagement patterns"
  },
  {
    icon: <Share2 className="h-8 w-8 text-orange-500" />,
    title: "Easy Export",
    description: "Export to CSV, PDF, or integrate directly with your favorite tools"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Tempo?</h2>
            <p className="text-gray-600">Set the perfect rhythm for your social media content</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}