import React from 'react';
import { RxDisc, RxDiscordLogo, RxGithubLogo, RxLinkedinLogo, RxInstagramLogo, RxTwitterLogo } from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-start justify-around flex-wrap'>
          {/* Contact Info */}
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-[16px] mb-[10px]'>Contact Info</div>

            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
              <span className='text-[15px] ml-[6px]'>brandon.se.25@gmail.com</span>
            </p>
          </div>
          {/* Social Media */}
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-[16px] mb-[10px]'>Social Media</div>

            <div className='flex flex-row items-center mt-[15px]'>
              <p className='flex flex-row items-center mx-[15px] cursor-pointer'>
                <RxLinkedinLogo />
                <span className='text-[15px] ml-[6px]'>Linkedin</span>
              </p>

              <p className='flex flex-row items-center mx-[15px] cursor-pointer'>
                <RxDiscordLogo />
                <span className='text-[15px] ml-[6px]'>Discord</span>
              </p>
            </div>
          </div>
          {/* GitHub Repo */}
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-[16px] mb-[10px]'>GitHub Repo</div>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
              <RxGithubLogo />
              <span className='text-[15px] ml-[6px]'>Github</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
