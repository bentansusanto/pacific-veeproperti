import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, ArrowLeft, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/properties';

interface PropertyDetailPageProps {
  property: Property;
}

const PropertyDetailPage = ({ property }: PropertyDetailPageProps) => {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24 mt-20">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <Link href="/properti" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Properties
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden shadow-md">
          <Image 
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 shadow-sm">
            For Sale
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header Info */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-3 mb-6">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-slate-500 text-xs sm:text-sm">
                    <MapPin className="h-4 w-4 mr-1.5 text-orange-500" />
                    {property.location}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-orange-600">
                  {property.price}
                </div>
              </div>

              {/* Quick Stats Bar */}
              <div className="flex flex-wrap items-center gap-5 py-5 border-y border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                    <Bed className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{property.beds}</p>
                    <p className="text-xs font-medium text-slate-500">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                    <Bath className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{property.baths}</p>
                    <p className="text-xs font-medium text-slate-500">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                    <Square className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{property.size}</p>
                    <p className="text-xs font-medium text-slate-500">Square Area</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">About this Property</h3>
              <p className="text-xs sm:text-sm md:text-base font-normal text-slate-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Property Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Agent Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Agent</h3>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100">
                  <Image 
                    src={property.agent.image}
                    alt={property.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">{property.agent.name}</p>
                  <p className="text-sm font-medium text-slate-500">VeeProperti Agent</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-12 rounded-xl text-md flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" /> Call {property.agent.name.split(' ')[0]}
                </Button>
                <Button variant="outline" className="w-full h-12 rounded-xl text-md flex items-center justify-center gap-2 border-slate-200">
                  <Mail className="h-5 w-5" /> Send Email
                </Button>
              </div>

              <p className="text-xs font-normal text-slate-400 mt-6 text-center">
                By clicking Contact Agent, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
