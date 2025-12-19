import { Check } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { BorderBeam } from '@/components/ui/BorderBeam';

import traderCard from '~/images/trader-card.png';
import tradingChart from '~/images/trading-chart.png';
import DiscordIcon from '~/svg/Discord.svg';
import ImageUserCheck from '~/svg/image-user-check.svg';
import LogoWhite from '~/svg/LogoWhite.svg';
import XIcon from '~/svg/X.svg';

const TaskItem = ({
  icon,
  label,
  points,
  completed,
}: {
  icon: React.ReactNode;
  label: string;
  points: number;
  completed?: boolean;
}) => (
  <div
    className={cn(
      'bg-disabled-subtle relative flex items-center justify-between overflow-hidden rounded-2xl p-4',
      {
        'border-disabled border': completed,
      },
    )}
  >
    {!completed && (
      <>
        <BorderBeam
          duration={8}
          size={100}
          className='from-transparent via-green-500 to-transparent'
        />
        <BorderBeam
          duration={8}
          delay={4}
          size={100}
          className='via-brand-500 from-transparent to-transparent'
        />
      </>
    )}

    <div className='flex items-center gap-4'>
      <div className='border-disabled flex size-8 items-center justify-center rounded-md border p-2'>
        {icon}
      </div>
      <span className='text-xs font-medium'>{label}</span>
    </div>
    <div className='flex items-center gap-2.5'>
      <div className='flex flex-row gap-0.5'>
        <div className='to-brand-500 size-3.5 rounded-full bg-white/5 bg-gradient-to-r from-green-500 p-1'>
          <LogoWhite className='size-full' />
        </div>
        <span className='text-xs font-medium'>+{points}</span>
      </div>

      <div className='bg-border-secondary h-3 w-px'></div>

      {completed ? (
        <div className='bg-brand-primary flex size-5 items-center justify-center rounded-full p-1'>
          <Check className='text-[hsla(266,100%,91%,1)]' strokeWidth={3} />
        </div>
      ) : (
        // <div className='to-brand-500 rounded-lg bg-gradient-to-r from-green-500 p-0.5'>
        //   <div className='flex size-full items-center justify-center bg-gray-800'>
        //     <button className='px-2.5 py-1.5 text-[8px] font-semibold'>
        //       Post
        //     </button>
        //   </div>
        // </div>
        <button disabled className='px-2.5 py-1.5 text-[8px] font-semibold'>
          Post
        </button>
      )}
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
      <div className='!pb-0'>
        <h3 className='mb-2 text-xl font-medium'>Prove Your Edge</h3>
        <p className='text-tertiary-600 mb-8 text-sm'>
          Connect your wallet and showcase your memecoin trading volume &
          profitability.
        </p>
        <div className='relative mt-auto'>
          <Image
            src={traderCard}
            alt='Trader profile card showing Top 1% status'
            className='h-auto w-full rounded-xl'
          />
          <div className='to-primary absolute inset-x-0 inset-y-1/3 bottom-0 bg-gradient-to-b from-transparent' />
        </div>
      </div>

      {/* Card 2: Complete Tasks */}
      <div className=''>
        <div className='relative mb-8 space-y-3'>
          <div className='to-primary absolute inset-x-0 inset-y-1/3 top-0 z-10 bg-gradient-to-t from-transparent' />
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
            icon={<ImageUserCheck />}
            label='Post your Card on X'
            points={10}
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
        <div className='relative mt-auto'>
          <Image
            src={tradingChart}
            alt='Professional trading interface with candlestick chart'
            className='h-auto w-full rounded-xl bg-white/10 p-1.5'
          />
          <div className='to-primary absolute inset-x-0 inset-y-1/3 bottom-0 bg-gradient-to-b from-transparent' />
        </div>
      </div>
    </section>
  );
}
