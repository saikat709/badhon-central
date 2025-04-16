"use client";

import { useEffect } from "react";
import { FaHospital, FaIdCardAlt, FaSearch, FaSyringe } from "react-icons/fa";

const services = [
  {
    title: "Blood Bank Integration",
    icon: <FaHospital className="text-crimson text-4xl" />,
  },
  {
    title: "Donor Verification",
    icon: <FaIdCardAlt className="text-crimson text-4xl" />,
  },
  {
    title: "Emergency Matching System",
    icon: <FaSearch className="text-crimson text-4xl" />,
  },
  {
    title: "Smart Donation Scheduling",
    icon: <FaSyringe className="text-crimson text-4xl" />,
  },
];

export default function OurServices() {
  useEffect(() => {
    // Initialize AOS animation library if needed
    import('aos').then((AOS) => {
      AOS.init({
        duration: 400,
        easing: 'ease-out',
        once: false
      });
    });
  }, []);
  return (
    <section className="py-16 px-4 bg-lightgray ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="card bg-emerald/10 shadow-sm hover:shadow-lg transition-shadow duration-300 "
            >
              <div className="card-body items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-lg font-semibold">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
