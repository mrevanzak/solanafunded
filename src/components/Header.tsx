import Logo from '~/svg/Logo.svg';

export function Header() {
  return (
    <header className='fixed z-50 flex top-4 w-full'>
      <nav className='inline-flex bg-background-secondary border-border-secondary mx-auto items-center gap-3 px-6 py-3 rounded-full bg-card/80 border border-border backdrop-blur-sm'>
        <div className='flex items-center gap-1.5'>
          <Logo className='size-6' />
          <span className='font-medium'>SOLANAFUNDED</span>
        </div>
        <div className='w-px h-3 bg-border-secondary'></div>
        <span className='text-sm text-secondary-700 font-medium text-secondary'>
          Memecoin Prop Trading
        </span>
      </nav>
    </header>
  );
}
