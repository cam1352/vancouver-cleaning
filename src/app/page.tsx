import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Sparkles, Clock, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-emerald-900 selection:text-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/logo.jpg" alt="Vancouver Cleaning Logo" fill className="object-contain mix-blend-multiply" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
              Vancouver <span className="font-light text-emerald-800">Cleaning</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm tracking-wide uppercase text-slate-500 hover:text-emerald-800 font-semibold transition">Services</Link>
            <Link href="#about" className="text-sm tracking-wide uppercase text-slate-500 hover:text-emerald-800 font-semibold transition">Our Standard</Link>
            <Link href="/book" className="text-sm tracking-wide uppercase text-slate-500 hover:text-emerald-800 font-semibold transition">Book</Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/quote" className="bg-emerald-900 text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-emerald-800 transition-all shadow-md flex items-center gap-2">
              Get an Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Luxury Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Pristine Vancouver Home Interior" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-100 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" /> Premier West Coast Service
            </div>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
              Impeccable spaces. <br/>
              <span className="font-bold text-emerald-400">Breathe easy.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg font-light leading-relaxed">
              Elevate your environment with Vancouver's most trusted luxury cleaning service. Eco-conscious, meticulous, and fully tailored to your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-white text-emerald-950 px-8 py-4 rounded-sm font-bold text-sm tracking-wide uppercase hover:bg-stone-100 transition shadow-xl text-center">
                Request a Quote
              </Link>
              <Link href="/book" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-sm tracking-wide uppercase hover:bg-white/10 transition text-center">
                Book Instantly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-emerald-950 py-8 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8 opacity-80">
          <div className="flex items-center gap-3 text-emerald-100/70"><CheckCircle className="w-5 h-5"/> <span className="text-sm font-semibold tracking-wide uppercase">Fully Insured & Bonded</span></div>
          <div className="flex items-center gap-3 text-emerald-100/70"><CheckCircle className="w-5 h-5"/> <span className="text-sm font-semibold tracking-wide uppercase">Eco-Friendly Products</span></div>
          <div className="flex items-center gap-3 text-emerald-100/70"><CheckCircle className="w-5 h-5"/> <span className="text-sm font-semibold tracking-wide uppercase">100% Satisfaction Guarantee</span></div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-emerald-800 uppercase mb-3">Our Expertise</h2>
              <h3 className="text-4xl font-light text-slate-900">Tailored cleaning solutions.</h3>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-700 transition group mt-4 md:mt-0">
              View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white group hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
              <div className="p-10 flex-1">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-slate-700 group-hover:text-emerald-100 transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Residential Estates</h4>
                <p className="text-slate-500 font-light leading-relaxed">Meticulous detail cleaning for luxury homes, condos, and estates. Recurring schedules designed around your privacy and lifestyle.</p>
              </div>
              <div className="px-10 pb-10 mt-auto">
                <div className="h-[1px] w-full bg-stone-100 mb-6"></div>
                <Link href="/book" className="text-sm font-bold text-emerald-800 hover:text-emerald-600 flex items-center gap-2 uppercase tracking-wide">
                  Book Residential <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-emerald-900 text-white group hover:shadow-2xl transition-all duration-300 border border-emerald-800 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/50 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="p-10 flex-1 relative z-10">
                <div className="w-12 h-12 bg-emerald-800 flex items-center justify-center mb-8">
                  <ShieldCheck className="w-6 h-6 text-emerald-100" />
                </div>
                <h4 className="text-xl font-bold mb-4">Commercial & B2B</h4>
                <p className="text-emerald-100/80 font-light leading-relaxed">Spotless professional environments. From medical facilities to high-end corporate offices up to 100,000 sq ft.</p>
              </div>
              <div className="px-10 pb-10 mt-auto relative z-10">
                <div className="h-[1px] w-full bg-emerald-800 mb-6"></div>
                <Link href="/quote" className="text-sm font-bold text-white hover:text-emerald-200 flex items-center gap-2 uppercase tracking-wide">
                  Calculate B2B Retainer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white group hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
              <div className="p-10 flex-1">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-slate-700 group-hover:text-emerald-100 transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Move-In / Move-Out</h4>
                <p className="text-slate-500 font-light leading-relaxed">A pristine blank slate. Deep cleaning protocols for real estate transitions, ensuring a flawless handoff for the next chapter.</p>
              </div>
              <div className="px-10 pb-10 mt-auto">
                <div className="h-[1px] w-full bg-stone-100 mb-6"></div>
                <Link href="/quote" className="text-sm font-bold text-emerald-800 hover:text-emerald-600 flex items-center gap-2 uppercase tracking-wide">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white flex items-center gap-2 mb-6 uppercase tracking-tight">
              Vancouver <span className="font-light text-emerald-600">Cleaning</span>
            </span>
            <p className="max-w-sm font-light leading-relaxed mb-6">
              Setting the standard for pristine environments across the Greater Vancouver Area.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#services" className="hover:text-emerald-400 transition">Our Services</Link></li>
              <li><Link href="/quote" className="hover:text-emerald-400 transition">Get an Estimate</Link></li>
              <li><Link href="/login" className="hover:text-emerald-400 transition">Client Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>concierge@vancouvercleaningservice.ca</li>
              <li>(604) 555-0123</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}