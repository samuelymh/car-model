import Image from 'next/image';
import HeroBg from '@/public/backgrounds/HeroBg.png';

export default function Hero() {
  return (
    <div className='relative h-[50vh] w-full overflow-hidden'>
      <Image
        src={HeroBg}
        alt='MG HS luxury SUV in motion'
        priority
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/0' />
      <div className='relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-white overflow-hidden'>
        <h2 className='mb-4 text-2xl font-light tracking-wider text-center'>
          Luxury in Motion
        </h2>
        <h1 className='mb-8 text-7xl font-bold tracking-tight text-center'>
          MG HS
        </h1>
        <p className='mb-12 max-w-2xl text-lg leading-relaxed text-center'>
          Elegance redefined with the All New MG HS. Captivating design and
          stunning beauty with an interior that is a spacious haven of luxury
          and comfort, elevating every journey. The MG HS is more than just an
          SUV; it offers an escape, inviting you to reconnect with what truly
          matters and embrace a richer, more fulfilling life.
        </p>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
          <div className='flex items-center gap-3'>
            <SpeedometerIcon className='h-8 w-8' />
            <div>
              <div className='text-2xl font-bold'>162 HP</div>
              <div className='text-sm text-gray-300'>Horsepower (hp)</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <GaugeIcon className='h-8 w-8' />
            <div>
              <div className='text-2xl font-bold'>250 Nm</div>
              <div className='text-sm text-gray-300'>Max Torque (Nm)</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <TimerIcon className='h-8 w-8' />
            <div>
              <div className='text-2xl font-bold'>0.1 secs</div>
              <div className='text-sm text-gray-300'>Gear Shifting Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 15 3.5-3.5' />
      <path d='M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4' />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 15 3.5-3.5' />
      <circle cx='12' cy='12' r='8' />
      <path d='M12 8v1' />
      <path d='M12 15v1' />
      <path d='M16 12h-1' />
      <path d='M9 12H8' />
    </svg>
  );
}

function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='10' x2='14' y1='2' y2='2' />
      <line x1='12' x2='15' y1='14' y2='11' />
      <circle cx='12' cy='14' r='8' />
    </svg>
  );
}
