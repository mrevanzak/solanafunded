import { Check } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import traderCard from '~/images/trader-card.png';
import tradingChart from '~/images/trading-chart.png';

const XIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

const DiscordIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' />
  </svg>
);

const ImageIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <circle cx='8.5' cy='8.5' r='1.5' />
    <polyline points='21 15 16 10 5 21' />
  </svg>
);

const TaskItem = ({
  icon,
  label,
  points,
  completed,
  hasAction,
}: {
  icon: React.ReactNode;
  label: string;
  points: number;
  completed?: boolean;
  hasAction?: boolean;
}) => (
  <div className='bg-card/50 border-border flex items-center justify-between rounded-xl border p-3'>
    <div className='flex items-center gap-3'>
      <div className='bg-muted/50 text-muted-foreground flex h-8 w-8 items-center justify-center rounded-lg'>
        {icon}
      </div>
      <span className='text-muted-foreground text-sm'>{label}</span>
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-accent text-sm font-medium'>⚡ +{points}</span>
      {completed ? (
        <div className='bg-accent flex h-6 w-6 items-center justify-center rounded-full'>
          <Check className='text-accent-foreground h-3.5 w-3.5' />
        </div>
      ) : hasAction ? (
        <button className='bg-muted/50 border-border text-foreground hover:bg-muted rounded-full border px-3 py-1 text-xs font-medium transition-colors'>
          Post
        </button>
      ) : null}
    </div>
  </div>
);

export function FeaturedSection() {
  return (
    <section
      className={cn(
        'flex flex-row flex-wrap gap-6',
        '*:bg-primary *:xs:min-w-xs *:flex-1 *:rounded-4xl *:p-6 *:sm:p-8',
      )}
    >
      {/* Card 1: Prove Your Edge */}
      <div className=''>
        <h3 className='mb-2 text-xl font-medium'>Prove Your Edge</h3>
        <p className='text-tertiary-600 mb-8 text-sm'>
          Connect your wallet and showcase your memecoin trading volume &
          profitability.
        </p>
        <div className='mt-auto'>
          <Image
            src={traderCard}
            alt='Trader profile card showing Top 1% status'
            className='h-auto w-full rounded-xl'
          />
        </div>
      </div>

      {/* Card 2: Complete Tasks */}
      <div className=''>
        <div className='mb-8 space-y-3'>
          <TaskItem
            icon={<DiscordIcon />}
            label='Join Discord'
            points={10}
            completed
          />
          <TaskItem
            icon={<XIcon />}
            label='Follow @SolanaFunded'
            points={10}
            completed
          />
          <TaskItem
            icon={<ImageIcon />}
            label='Post your Card on X'
            points={10}
            hasAction
          />
        </div>

        <h3 className='mb-2 text-xl font-medium'>Complete Tasks</h3>
        <p className='text-tertiary-600 text-sm'>
          Boost your chances by completing simple tasks and climbing the
          leaderboard.
        </p>
      </div>

      {/* Card 3: Get Funded */}
      <div className=''>
        <h3 className='mb-2 text-xl font-medium'>Get Funded</h3>
        <p className='text-tertiary-600 mb-8 text-sm'>
          Top traders get funded to trade memecoins with our capital. Keep your
          profits.
        </p>
        <div className='mt-auto'>
          <Image
            src={tradingChart}
            alt='Professional trading interface with candlestick chart'
            className='h-auto w-full rounded-xl'
          />
        </div>
      </div>
    </section>
  );
}
