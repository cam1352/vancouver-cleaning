import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* Floating Glass Header */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
        <header className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-3 font-bold tracking-tight text-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            Vancouver Cleaning
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <Link href="#services" className="hover:text-black transition">Services</Link>
            <Link href="#about" className="hover:text-black transition">Reviews</Link>
            <Link href="/faq" className="hover:text-black transition">FAQ</Link>
          </nav>
          <Link href="/book" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:bg-blue-600 transition-all duration-300">
            Book Now
          </Link>
        </header>
      </div>

      {/* Modern Hero Section */}
      <section className="pt-40 pb-20 px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 animate-in slide-in-from-bottom-4 duration-700">
          <Star className="w-4 h-4 fill-current" /> Top Rated in Metro Vancouver
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter max-w-4xl leading-[1.05] mb-8">
          Cleaning, <span className="text-gray-400">reimagined for</span> modern living.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mb-10 leading-relaxed">
          Book a spotless home in 60 seconds. Transparent pricing, verified professionals, and zero hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/book" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
            Get an instant quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Abstract Graphic */}
        <div className="mt-20 w-full max-w-6xl h-[400px] md:h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-2xl">
           <Image src="/hero.jpg" alt="Modern clean interior" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
           <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
             <div className="bg-white/20 backdrop-blur-md text-white border border-white/20 p-6 rounded-3xl max-w-sm hidden md:block">
               <p className="font-medium text-lg leading-snug">"The easiest booking experience I've ever had. My condo has never looked better."</p>
               <p className="text-sm opacity-70 mt-2 font-bold">— Sarah T., Yaletown</p>
             </div>
           </div>
        </div>
      </section>

      {/* Bento Box Services */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Everything you need.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Big Card */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-blue-100"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Deep Residential</h3>
              <p className="text-gray-500 text-lg mb-8 max-w-md">Comprehensive cleaning for condos, townhouses, and detached homes. We bring our own eco-friendly supplies.</p>
              <div className="mt-auto">
                <Link href="/book" className="inline-flex bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">Book Residential</Link>
              </div>
            </div>
          </div>

          {/* Tall Card */}
          <div className="bg-slate-900 text-white rounded-[2rem] p-10 shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -mr-10 -mb-10"></div>
             <div className="relative z-10 h-full flex flex-col">
               <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
               <h3 className="text-3xl font-bold mb-4">B2B Commercial</h3>
               <p className="text-gray-400 text-lg mb-8">Specialized contracts for offices up to 100,000 sq ft. Fully insured.</p>
               <div className="mt-auto">
                 <Link href="/quote" className="inline-flex bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors">View Retainers</Link>
               </div>
             </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-start">
            <Calendar className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2">Move-In / Out</h3>
            <p className="text-gray-500 mb-6">Get your deposit back with our rigorous turnover protocol.</p>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2rem] p-10 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <h3 className="text-3xl font-bold mb-2">Serving all of Metro Vancouver</h3>
               <p className="text-blue-200 text-lg">From West Vancouver to Langley.</p>
             </div>
             <Link href="/book" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform whitespace-nowrap flex items-center gap-2">
               <MapPin className="w-5 h-5"/> Check Availability
             </Link>
          </div>

        </div>
      </section>
    </div>
  );
}