import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full'
      />
    </div>
  );
};

export default ProjectCard;
