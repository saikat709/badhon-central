import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import AOS from 'aos';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { Slide } from "react-awesome-reveal";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
    
    setIsLoaded(true);
  }, []);

  // Hero content for each slide
  const heroSlides = [
    {
      src: '/images/Banner1.jpg',
      alt: 'Person donating blood',
      title: 'Find a Lifesaver in Seconds',
      description: 'Your donation can save up to three lives. Join our community of heroes today.',
      buttonText: 'Become a Donor'
    },
    {
      src: '/images/Banner2.png',
      alt: 'Blood donation center',
      title: 'Every Drop Counts',
      description: 'Blood cannot be manufactured – it can only come from generous donors like you.',
      buttonText: 'Schedule Donation'
    },
    {
      src: '/images/Banner3.jpg',
      alt: 'Medical professional with donor',
      title: 'Be Someone\'s Hero',
      description: "Emergency patients can't wait. Your donation makes all the difference in critical moments.",
      buttonText: 'Learn More'
    },
  ];

  return (
    <div className="relative h-[550px] w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay:
            5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-purewhite/50 !opacity-70',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-purewhite !opacity-100',
          }}
          loop={true}
          speed={1000}
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJWQPXOMfSjwAAAABJRU5ErkJggg=="
                  onLoad={() => {
                    if (index === 0) setIsLoaded(true);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dynamic Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 ${
                activeIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10 absolute'
              }`}
            >
              <Slide
               damping={0.2}
               cascade={true}
               direction="up"
              >
              <h1
                className="mb-6 font-bold leading-tight text-white text-4xl md:text-5xl lg:text-6xl"
              >
                {slide.title}
              </h1>
              <p
                className="mb-8 text-lg md:text-xl text-gray-300 max-w-xl"
              >
                {slide.description}
              </p>
              <div
              >
                <button className="btn btn-lg bg-crimson hover:bg-blood text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {slide.buttonText}
                </button>
              </div>
              </Slide>
            </div>
          ))}
        </div>
      </div>

      {/* Blood drop floating animation */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:block">
        <div className="animate-float">
          <svg width="50" height="70" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C20 0 0 30 0 45C0 53.2843 8.95431 60 20 60C31.0457 60 40 53.2843 40 45C40 30 20 0 20 0Z" fill="#D90429" />
          </svg>
        </div>
      </div>
      
      {/* Custom slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-purewhite w-8' : 'bg-purewhite/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;