import Hero from '@/components/main/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero></Hero>
        <div className='flex flex-col absolute top-0 left-0 right-0 bottom-[340px] z-20 bg-blue-600 bg-opacity-10'></div>
      </div>
    </main>
  );
}
