import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/home/hero';
import { Features } from '@/components/home/features';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}