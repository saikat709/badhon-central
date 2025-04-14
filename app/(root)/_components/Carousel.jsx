'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: '/images/b1.png',
    caption: 'Donate Blood, Save Lives',
  },
  {
    src: '/images/b2.png',
    caption: 'Be a Hero Today',
  },
  {
    src: '/images/b3.png',
    caption: 'Every Drop Counts',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="min-w-full relative">
            <Image src={img.src} alt={img.caption} width={1000} height={500} className="w-full h-72 object-cover" />
            <div className="absolute bottom-0 bg-red-600 bg-opacity-60 w-full text-white text-xl p-4 text-center font-semibold">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-red-100">
        <FaChevronLeft className="text-red-600" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-red-100">
        <FaChevronRight className="text-red-600" />
      </button>
    </div>
  );
}
