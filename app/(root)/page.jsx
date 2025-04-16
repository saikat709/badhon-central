'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { redirect, RedirectType } from 'next/navigation';
import HeroSection from './_components/HeroSection';
import BloodDonationButtons from './_components/BloodDonationButtons';
import OurServices from './_components/OurServices';
import ImpactSection from './_components/ImpactSection';


//to do : 1. nav bar
// 2. Slider
// 3. Call to Action(login, register)
// 4. Services((blood donation, blood bank, etc.) in grid style)
// 5. Recomendations
// 6. Footer

const Home = () => {

  const { data: session } = useSession();

  useEffect( ()=>{
    if ( session?.user ) {
      redirect("/dashboard", RedirectType.replace);
    }
  }, []);

  return (
    <div>
      <HeroSection/>
      <BloodDonationButtons/>
      <OurServices/>
      <ImpactSection/>
      <a href='/auth/login' className='block underline text-green-900/90'> Go to login page </a>
    </div>
  )
};

export default Home