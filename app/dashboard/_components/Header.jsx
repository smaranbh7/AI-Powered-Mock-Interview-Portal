"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'; 
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Header = () => {

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
   
    <div className='flex p-4 items-center justify-between bg-secondary shadow-small'>
      <Link href="/dashboard">
      <Image src="/logo.svg" className='cursor-pointer' width={160} height={100} alt="logo" />
      </Link>
      {/*  Responsive nav */} 
      <ul className='hidden md:flex gap-6'>
        <li 
        className={`hover:text-primary hover:font-bold transition-all cursor-pointer justify-center
         ${path=='/dashboard'&& 'text-primary font-bold'}   
        `}
        >Dashboard</li>
        {/* <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/questions'&& 'text-primary font-bold'}   
        `}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/upgrade'&& 'text-primary font-bold'}   
        `}>Upgrade</li> 
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/how'&& 'text-primary font-bold'}   
        `}>How it works?</li> */}
      </ul>
      <UserButton />
    </div>
  );
};
export default Header;