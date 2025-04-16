import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

export default function CallToActionSection() {
  useEffect(() => {
      AOS.init({
        duration: 400,
        easing: 'ease-out',
        once: false
      });
  }, []);

  return (
    <section className="py-20 px-4 bg-lightgray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900"
          data-aos="fade-up"
        >
          Ready to make a difference?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link 
            href="/become-donor"
            className="w-full md:w-auto"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <button className="w-full bg-crimson hover:bg-blood text-white py-4 px-8 rounded-lg transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg">
              Become a Donor
            </button>
          </Link>
          
          <Link 
            href="/become-volunteer"
            className="w-full md:w-auto"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <button className="w-full bg-crimson hover:bg-blood text-white py-4 px-8 rounded-lg transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg">
              Become a Volunteer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}