import Logo from '~/svg/Logo.svg';

export function Header() {
  return (
    <header className='sticky top-4 z-50 mt-4 mb-6 flex w-full px-[16px]'>
      <nav className='xs:flex-row bg-background-secondary border-border-secondary xs:w-fit xs:rounded-full bg-card/80 border-border xs:py-3 mx-auto inline-flex w-full flex-col items-center justify-center gap-3 rounded-4xl border px-6 py-4 shadow-md backdrop-blur-lg'>
        <div className='flex items-center gap-1.5'>
          <Logo className='size-6' />
          <span className='font-medium'>SOLANAFUNDED</span>
        </div>

        <div className='bg-border-secondary max-xs:hidden h-3 w-px'></div>
        <div className='bg-border-secondary xs:hidden h-px w-full'></div>

        <span className='text-secondary-700 text-secondary text-sm font-medium'>
          Memecoin Prop Trading
        </span>
      </nav>
    </header>
  );
}
