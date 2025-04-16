"use client";
//this component is used to create the buttons for blood donation and blood request
// it uses AOS for animation on scroll
// and next/link for navigation
import { useEffect } from 'react';
import Link from 'next/link';

export default function BloodDonationButtons() {
  useEffect(() => {
    // Initialize AOS when component mounts
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <div className="flex bg-offwhite w-full flex-col md:flex-row max-w-6xl gap-6 justify-center mx-auto my-12 px-4">
      {/* Donate Blood Button */}
      <Link href="/donate-blood" className="w-full md:w-1/2">
        <div
        data-aos="fade-left"
          className="rounded-xl bg-red-100 over:bg-red-100 border-2 border-red-100 shadow-lg transition-all duration-300 hover:shadow-xl p-8 cursor-pointer justify-center flex items-center text-center h-full"
        >
          <div className="bg-red-700 text-white p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className='ml-4'>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">I Want to Donate</h2>
          <p className="text-lg font-medium text-gray-600">Give hope, one-drop at a time</p>
          </div>
        </div>
      </Link>

      {/* Need Blood Button */}
      <Link href="/request-blood" className="w-full md:w-1/2">
        <div 
        data-aos="fade-right"
          className="rounded-xl bg-gray-50 hover:bg-gray-100 border-2 border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl p-8 cursor-pointer flex items-center justify-center h-full"
        >
          <div className="bg-red-600 text-white p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div className="ml-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">I Need Blood</h2>
          <p className="text-lg font-medium text-gray-600">Request blood in under 80 seconds</p>
          </div>
        </div>
      </Link>
    </div>
  );
}