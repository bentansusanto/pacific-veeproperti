import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';

const PropertiesPage = () => {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 mt-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Our Properties</h1>
          <p className="text-sm sm:text-base md:text-lg font-normal text-slate-400 max-w-2xl mx-auto">
            Explore our exclusive collection of luxury homes and strategic investments.
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="flex justify-between items-center mb-8">
          <p className="text-slate-500 font-medium">Showing all {properties.length} properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:shadow-orange-500/5 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={prop.image} 
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-orange-600 shadow-sm">
                  Available
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <MapPin className="h-3 w-3 mr-1 text-orange-500" />
                  {prop.location}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 truncate">{prop.title}</h4>
                
                <div className="flex justify-between items-center py-4 border-y border-slate-50 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Bed className="h-4 w-4 text-orange-500" /> {prop.beds} Br
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Bath className="h-4 w-4 text-orange-500" /> {prop.baths} Ba
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Square className="h-4 w-4 text-orange-500" /> {prop.size}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">{prop.price}</span>
                  <Link href={`/properti/${prop.id}`}>
                    <Button size="sm" className="rounded-xl">Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
