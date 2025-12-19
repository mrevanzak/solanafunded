import * as React from 'react';
import '@/lib/env';

import { HeroSection } from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main className='layout min-h-screen'>
      <HeroSection />
    </main>
  );
}
