"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

export function GeneratorPrompt() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Smart assistant integration will go here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Describe your content needs
        </label>
        <Textarea
          id="prompt"
          placeholder="I need a content calendar for my fitness coaching business, posting 3 times a week with workout tips, nutrition advice, and client success stories..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg"
        disabled={isLoading || !prompt.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Creating your calendar...
          </>
        ) : (
          'Generate My Calendar'
        )}
      </Button>
    </form>
  );
}