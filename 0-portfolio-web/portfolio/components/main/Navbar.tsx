import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

import { RxDisc, RxDiscordLogo, RxGithubLogo, RxLinkedinLogo, RxInstagramLogo, RxTwitterLogo } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a
          href='#hero'
          className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='Logo'
            width={70}
            height={70}
            className='cursoir-pointer hover:animate-slowspin'
          />

          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Brandon&apos;s Portfolio</span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a
              href='#hero'
              className='cursor-pointer'>
              About me
            </a>

            <a
              href='#skills'
              className='cursor-pointer'>
              Skills
            </a>

            <a
              href='#projects'
              className='cursor-pointer'>
              Projects
            </a>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          <a
            href='https://www.linkedin.com/in/brandon-soria-207266294/'
            target='_blank'
            rel='noopener noreferrer'>
            <RxLinkedinLogo
              color='white'
              className='text-[15px] size-8'
            />
          </a>

          <a
            href='https://github.com/Bran-Eng?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'>
            <RxGithubLogo
              color='white'
              className='text-[15px] size-8'
            />
          </a>

          <a
            href='https://discordapp.com/users/front_end_brandon'
            target='_blank'
            rel='noopener noreferrer'>
            <RxDiscordLogo
              color='white'
              className='text-[15px] size-8'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
