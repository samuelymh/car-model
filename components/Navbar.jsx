'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import logo from '@/public/icons/logo.svg';
import Image from 'next/image';

export default function Navbar() {
  const links = [
    {
      label: 'Models',
      href: '#',
      subLinks: [
        {
          label: 'Stub',
          href: '#',
        },
      ],
    },
    {
      label: 'Shopping Tools',
      href: '#',
      subLinks: [
        {
          label: 'Stub',
          href: '#',
        },
      ],
    },
    {
      label: "Owner's Benefit",
      href: '#',
      subLinks: [],
    },
    {
      label: 'After Sales',
      href: '#',
      subLinks: [
        {
          label: 'Stub',
          href: '#',
        },
      ],
    },
    {
      label: 'Corporate Sales',
      href: '#',
      subLinks: [],
    },
    {
      label: 'Discover MG',
      href: '#',
      subLinks: [
        {
          label: 'Stub',
          href: '#',
        },
      ],
    },
  ];

  return (
    <nav className='abril-fatface-regular hidden text-xs lg:gap-3 2xl:text-sm h-[93px] lg:flex justify-center items-center shadow-lg z-50'>
      <ul className='flex justify-center space-x-4 gap-4'>
        <Link href='/' className='absolute left-12 top-0 h-[140px] z-[101]'>
          <Image
            src={logo}
            alt='MG Logo'
            width={120}
            priority
            className='object-contain'
          />
        </Link>
        {links.map((link, key) => {
          const { label, href, subLinks } = link;

          return (
            <li key={key} className='flex hover:text-[#e10012] items-center'>
              <Link href={href}>{label}</Link>
              {subLinks.length > 0 && <ChevronDown />}
            </li>
          );
        })}
      </ul>
      <div className='absolute right-1 flex mr-10 space-x-5'>
        <Button
          asChild
          className='bg-white text-black hover:bg-[#e10012] hover:text-white px-5 2xl:px-6 2xl:h-12 transition-colors duration-300'
        >
          <Link href='/'>Speak To Us</Link>
        </Button>
        <Button
          asChild
          className='bg-[#27262B] hover:bg-[#e10012] hover:text-white px-5 2xl:px-6 2xl:h-12 transition-colors duration-300'
        >
          <Link href='/'>Let's Test Drive</Link>
        </Button>
      </div>
    </nav>
  );
}
