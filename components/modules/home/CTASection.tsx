import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden bg-slate-900 py-20 px-8 md:px-20 text-center md:text-left">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your <br className="hidden md:block" /> Dream Home Now?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-normal mb-8 max-w-lg">
              Contact our property consultants today for exclusive offers and the best service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-8 text-lg rounded-2xl group">
              Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-800 hover:text-white h-14 px-8 text-lg rounded-2xl transition-all">
              Search Property
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
