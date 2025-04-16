"use client";
import CountUp from "react-countup";

const stats = [
  { label: "Donors Registered", value: 12400 },
  { label: "Requests Fulfilled", value: 5320 },
  { label: "Active Volunteers", value: 700 },
  { label: "Units Nationwide", value: 120 },
];
export default function ImpactSection() {

  return (
    <section className="bg-offwhite py-16 px-4 md:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-textprimary mb-12">
        Our Impact So Far
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold text-crimson">
              <CountUp end={stat.value} duration={2} separator="," />+
            </p>
            <span className="text-base md:text-lg text-textsecondary mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
