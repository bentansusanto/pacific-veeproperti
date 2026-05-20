import React from 'react';
import { Home, Key, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "Buy Property",
    desc: "Find a wide selection of your dream houses, apartments, and land with a transparent process."
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: "Rent Property",
    desc: "Find strategic residences or business spaces with a flexible and easy rental system."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Investment",
    desc: "Smart consultation for property investment with high potential capital gain in the future."
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Legality",
    desc: "Professional assistance in handling property documents and legality to ensure your transactions are safe."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-3">Our Services</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Complete Solutions for All Your Property Needs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-white hover:border-orange-200 transition-all duration-300 group shadow-sm hover:shadow-md hover:shadow-orange-500/5">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-normal">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
