import { Twitter, Linkedin, Globe } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function getPlatformIcon(platform: string): LucideIcon {
  switch (platform.toLowerCase()) {
    case 'twitter':
      return Twitter;
    case 'linkedin':
      return Linkedin;
    default:
      return Globe;
  }
}