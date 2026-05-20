import React from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { properties } from '@/data/properties';

const FeaturedListings = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-3">Featured Properties</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Discover Our Best Exclusive Homes</h3>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 group">
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((prop) => (
            <div key={prop.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:shadow-orange-500/5 transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
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

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <MapPin className="h-3 w-3 mr-1 text-orange-500" />
                  {prop.location}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 truncate">{prop.title}</h4>
                
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
    </section>
  );
};

export default FeaturedListings;
