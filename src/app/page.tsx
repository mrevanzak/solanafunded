import * as React from 'react';
import '@/lib/env';

import { FeaturedSection } from '@/components/FeaturedSection';
import { HeroSection } from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main className='layout min-h-screen space-y-6'>
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
