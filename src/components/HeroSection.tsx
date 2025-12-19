import { Zap } from 'lucide-react';

import { Button } from '@/components/ui/Button';

import DiscordIcon from '~/svg/Discord.svg';
import XIcon from '~/svg/X.svg';

export function HeroSection() {
  return (
    <section className='bg-primary border-brand relative overflow-hidden rounded-4xl border-2'>
      <div className='absolute inset-0 bg-[url("/svg/background.svg")] bg-cover' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center space-y-6 px-6 py-16 md:py-24'>
        {/* Social Icons */}
        <div className='inline-flex items-center gap-5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-lg [&_svg]:size-5.5'>
          <XIcon />

          <svg
            fill='currentColor'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Telegram</title>
            <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
          </svg>

          <DiscordIcon />
        </div>

        {/* Headline */}
        <h1 className='text-center text-4xl font-semibold md:text-5xl lg:text-6xl'>
          Get Funded to Trade Memecoins
        </h1>

        {/* Subtitle */}
        <p className='text-secondary-700 max-w-2xl text-center text-lg md:text-xl'>
          Join the waitlist. Complete tasks. Boost your chances to get funded
          and trade with our capital.
        </p>

        {/* CTA Buttons */}
        <div className='!mt-12 flex flex-col items-center gap-4 sm:flex-row'>
          <Button variant='hero' size='lg' className='min-w-[180px]'>
            Become a Partner
          </Button>
          <Button variant='heroGradient' size='lg' className='min-w-[180px]'>
            <Zap className='h-4 w-4' />
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
