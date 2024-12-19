import { Clock, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GeneratorPrompt } from './generator-prompt';

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Set the Perfect Rhythm for Your Content
          </h1>
          <p className="text-xl text-white/90">
            Create, schedule, and manage your social media content with perfect timing
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-semibold text-gray-800">Smart Calendar Generator</span>
            </div>
            <GeneratorPrompt />
          </Card>
        </div>
      </div>
    </section>
  );
}