import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        {/* <div className='flex flex-col absolute top-0 left-0 right-0 bottom-[1340px] z-20 bg-blue-600 bg-opacity-10'></div> */}
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
