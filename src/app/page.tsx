import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <Sparkles className="w-6 h-6" />
            <span>Vancouver Cleaning Service</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/quote" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Spotless spaces for a <span className="text-blue-600">beautiful Vancouver.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
              Reliable, professional, and eco-friendly cleaning services for your home or office. Book instantly and get your customized quote today.
            </p>
            <div className="flex gap-4">
              <Link href="/quote" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition shadow-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Fast & Transparent</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">Fully insured and vetted professionals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-gray-700">Flexible scheduling to fit your lifestyle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-purple-500 shrink-0" />
                  <span className="text-gray-700">Simple online quoting and contract signing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored cleaning solutions for every need.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Cleaning</h3>
              <p className="text-gray-600 mb-4">Deep cleaning, standard cleaning, and recurring services for your home.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border hover:shadow-lg transition">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">Keep your office space pristine and welcoming for employees and clients.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border hover:shadow-lg transition">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Move-In / Move-Out</h3>
              <p className="text-gray-600 mb-4">Stress-free thorough cleaning when you are transitioning between homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" /> Vancouver Cleaning Service
            </span>
            <p className="max-w-xs">Serving the Greater Vancouver Area with top-tier, reliable cleaning solutions.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/quote" className="hover:text-white transition">Get a Quote</Link></li>
              <li><Link href="/login" className="hover:text-white transition">Client Login</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Join as Subcontractor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>info@vancouvercleaningservice.ca</li>
              <li>(604) 555-0123</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
