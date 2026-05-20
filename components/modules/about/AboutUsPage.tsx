import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Eye, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import CTASection from '../home/CTASection';

const values = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Transparency",
    desc: "We believe in 100% transparent transactions with no hidden fees or surprise costs."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Security & Legality",
    desc: "Every property we handle undergoes strict legal verification for your peace of mind."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    desc: "We deliver premium service standards, ensuring a smooth and professional experience."
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Client First",
    desc: "Your needs, budget, and goals dictate our strategy. We work for you."
  }
];

const AboutUsPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="bg-slate-900 py-24 relative overflow-hidden mt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Building Trust,<br/>Delivering Dreams</h1>
          <p className="text-sm sm:text-base md:text-lg font-normal text-slate-400 max-w-2xl mx-auto">
            VeeProperti is your premier real estate partner, dedicated to making property transactions transparent, secure, and highly rewarding.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="VeeProperti Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
                Our Story
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                More Than Just an Agency, We Are Your Strategic Partner
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 leading-relaxed">
                Founded with a vision to revolutionize the real estate industry, VeeProperti emerged from a simple observation: buying or selling property was often stressful and legally complex for most people.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 leading-relaxed">
                We stepped in to change that narrative. Today, we stand as a trusted consulting firm that not only helps you find the perfect luxury home or commercial space, but also guarantees the legal safety and optimal investment return of every transaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">1,000+</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Properties Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">98%</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-3">Vision & Mission</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Guiding Principles That Drive Us Forward</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md hover:shadow-orange-500/5 transition-all border border-slate-100">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Our Vision</h4>
              <p className="text-slate-500 leading-relaxed font-normal text-sm sm:text-base md:text-lg">
                To be the most trusted and innovative property consultant in the nation, setting the gold standard for real estate transactions through transparency, technology, and uncompromising integrity.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md hover:shadow-orange-500/5 transition-all border border-slate-100">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Our Mission</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 shrink-0" />
                  <span className="text-slate-500 font-normal">Provide secure, legally guaranteed property transactions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 shrink-0" />
                  <span className="text-slate-500 font-normal">Deliver unmatched, personalized customer service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 shrink-0" />
                  <span className="text-slate-500 font-normal">Educate clients to make highly profitable investment decisions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-3">Core Values</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Why You Can Trust VeeProperti</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-200 shadow-sm hover:shadow-md hover:shadow-orange-500/5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">{val.title}</h4>
                <p className="text-slate-500 font-normal text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutUsPage;
