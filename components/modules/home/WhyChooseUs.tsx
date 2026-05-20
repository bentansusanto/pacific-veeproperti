import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Multi-Image Collage */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="grid grid-cols-12 gap-4 items-end">
              {/* Main Image */}
              <div className="col-span-8 relative h-[500px] rounded-[32px] overflow-hidden shadow-md z-20">
                <Image 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                  alt="Professional team"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Secondary Images Column */}
              <div className="col-span-4 space-y-4">
                <div className="relative h-48 rounded-[24px] overflow-hidden shadow-md">
                  <Image 
                    src="https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=1887&auto=format&fit=crop" 
                    alt="Luxury interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-[24px] overflow-hidden shadow-md border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern skyscraper"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-md z-30 border border-slate-50 flex items-center gap-4 animate-in slide-in-from-left duration-1000">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">10+</p>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
                Why Choose Us
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Trusted Partner for Your <br />
                Property Future
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 leading-relaxed">
                VeeProperti is not just an ordinary property agent. We are strategic consultants who ensure every step of your investment is safe, transparent, and profitable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, text: "Guaranteed Legality" },
                { icon: <Users className="h-5 w-5" />, text: "Professional Team" },
                { icon: <CheckCircle2 className="h-5 w-5" />, text: "Exclusive Properties" },
                { icon: <Award className="h-5 w-5" />, text: "Best Services" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group shadow-sm hover:bg-white hover:border-orange-200 hover:shadow-md hover:shadow-orange-500/5 transition-all duration-300">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-slate-400 italic text-sm">
                "We believe that everyone deserves a dream home with an honest and pleasant process."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
