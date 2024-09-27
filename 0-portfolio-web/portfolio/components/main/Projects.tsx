import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-10'
      id='projects'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>My Projects</h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Moden Next.js Portfolio'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Moden Next.js Portfolio'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Moden Next.js Portfolio'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>
    </div>
  );
};

export default Projects;
