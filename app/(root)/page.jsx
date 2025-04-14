'use client'

import React, { useEffect } from 'react'
import Carousel from './_components/Carousel';
import { useSession } from 'next-auth/react';
import { redirect, RedirectType } from 'next/navigation';

const Home = () => {

  const { data: session } = useSession();

  useEffect( ()=>{
    if ( session?.user ) {
      redirect("/dashboard", RedirectType.replace);
    }
  }, []);

  return (
    <div className='flex items-center mt-12 flex-col'>
      <h1 className="text-4xl text-center font-bold text-red-700 mb-8">Welcome to LifeBlood</h1>
      <Carousel />
        Landing Page here
      <a href='/auth/login' className='block underline text-green-900/90'> Go to login page </a>
    </div>
  )
};

export default Home