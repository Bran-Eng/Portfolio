import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div
      className='relative flex flex-col h-full w-full'
      id='hero'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-'>
        <source
          // src='blackhole_blue_2.webm'
          src='ccc.mov'
          type='video/webm'
        />
      </video>

      <HeroContent></HeroContent>
    </div>
  );
};

export default Hero;
