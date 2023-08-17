import React from 'react';
import Image from 'next/image';
import { Vazirmatn } from 'next/font/google';
import Logo from '../../public/logo.png';

const vazirmatn = Vazirmatn({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <>
      <nav className='flex gap-3 items-center max-w-5xl mx-auto'>
        <Image alt='suvaye-logo' src={Logo} />
        <h1 className={vazirmatn.className}>Suvaye Dictionary</h1>
      </nav>
    </>
  );
};

export default Navbar;
