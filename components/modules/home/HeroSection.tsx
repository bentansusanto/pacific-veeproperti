import Image from 'next/image';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern luxury house"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Find Your <span className="text-orange-500 italic">Dream</span> <br /> Home Here
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-2xl mx-auto">
            Explore thousands of the best properties in strategic locations with competitive prices. Start your search today.
          </p>

          {/* Search Box / Filter Bar */}
          <div className="mt-12 w-full max-w-4xl p-2 bg-white/20 rounded-2xl border border-white/30 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white rounded-xl p-2">
              <div className="flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p>
                  <input 
                    type="text" 
                    placeholder="Jakarta, Indonesia" 
                    className="w-full text-sm font-semibold outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>
              
              <div className="flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
                <Home className="h-5 w-5 text-primary mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Property Type</p>
                  <select className="w-full text-sm font-semibold outline-none bg-transparent">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center px-4 py-3">
                <DollarSign className="h-5 w-5 text-primary mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Price Range</p>
                  <select className="w-full text-sm font-semibold outline-none bg-transparent">
                    <option>Any</option>
                    <option>500m - 1b</option>
                    <option>1b - 5b</option>
                    <option>5b+</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <Button className="w-full h-full py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Now
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base md:text-lg">12K+</span> Properties Listed
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base md:text-lg">5K+</span> Happy Clients
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
