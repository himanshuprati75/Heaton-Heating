import { useState } from 'react';
import { Flame, Snowflake, Droplets, Wind, Wrench, Sparkles, ChevronRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export default function ServicesGrid({ onSelectService, onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Capabilities (6)' },
    { id: 'heating', label: 'Furnaces & Heating' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'boilers', label: 'Boilers & Hydronics' },
    { id: 'heatpumps', label: 'Heat Pumps' },
    { id: 'iaq', label: 'Tune-Ups & IAQ' },
  ];

  const services = [
    {
      id: 'heating',
      serviceId: 'furnace-repair',
      title: 'High-Efficiency Furnace Repair & Installation',
      tag: '60-DAY REPAIR GUARANTEE',
      desc: 'Rapid 24/7 diagnostic and repair for failed furnaces, electronic ignitors, flame sensors, and turnkey 96%+ AFUE gas furnace replacements.',
      features: [
        'Same-day emergency heat restoration across Brown County',
        'Electronic ignition, flame sensor & gas valve diagnostics',
        'High-efficiency variable-speed furnace installations',
        'Full carbon monoxide and heat exchanger safety inspection',
      ],
      image: '/images/furnace_install.jpg',
      icon: Flame,
    },
    {
      id: 'ac',
      serviceId: 'ac-repair',
      title: 'Central Air Conditioning & Ductless Mini-Splits',
      desc: 'Precision AC diagnostics, refrigerant recharge, compressor repair, and multi-zone ductless mini-split systems for homes without existing ductwork.',
      features: [
        'Same-day refrigerant leak detection & pressure test',
        'High-SEER2 central cooling system replacements',
        'Multi-zone mini-splits for bonus rooms and lakefront cabins',
        'Capacitor, contactor, and condenser fan motor repair',
      ],
      image: '/images/mini_splits.jpg',
      icon: Snowflake,
    },
    {
      id: 'boilers',
      serviceId: 'boiler',
      title: 'Hydronic Boilers & Radiator Heating Systems',
      desc: 'Specialized maintenance, leak repairs, and modern condensing boiler replacements for radiator, baseboard, and in-floor radiant heating systems.',
      features: [
        'Circulator pump, expansion tank & zone valve repair',
        'Cast iron and high-efficiency modulating boilers',
        'Radiator bleeding, air purging & pressure balancing',
        '60-day written guarantee on all hydronic piping repairs',
      ],
      image: '/images/boiler_piping.jpg',
      icon: Droplets,
    },
    {
      id: 'heatpumps',
      serviceId: 'heatpump',
      title: 'Cold-Climate Heat Pumps & Hybrid Heating',
      desc: 'Advanced heat pump systems delivering high-efficiency electric heating down to sub-zero temperatures, paired seamlessly with gas furnace backup.',
      features: [
        'Variable-speed inverter compressors for quiet performance',
        'Dual-fuel hybrid heating with automatic temperature switch',
        'Outdoor coil defrost control diagnostics & fixes',
        'Substantial reduction in seasonal energy consumption',
      ],
      image: '/images/heatpump_install.jpg',
      icon: Wind,
    },
    {
      id: 'iaq',
      serviceId: 'tune-up',
      title: '24-Point Seasonal Safety & Efficiency Tune-Ups',
      desc: 'Comprehensive pre-season maintenance that prevents unexpected winter freeze-ups, optimizes fuel efficiency, and protects equipment longevity.',
      features: [
        'Comprehensive 24-point burner, electrical & airflow check',
        'Heat exchanger inspection for crack & leak prevention',
        'Capacitor and motor amp draw performance testing',
        'Priority scheduling & discount on repair parts',
      ],
      image: '/images/hero_tech.jpg',
      icon: Wrench,
    },
    {
      id: 'iaq',
      serviceId: 'replacement',
      title: 'Smart Wi-Fi Thermostats & Indoor Air Filtration',
      desc: 'Upgrade your home comfort with Ecobee, Nest, or Honeywell smart Wi-Fi thermostats, central media air filtration, and humidity control.',
      features: [
        'Remote smartphone control and automated freeze alerts',
        'Whole-home MERV 13 high-capacity media air filtration',
        'Winter humidification and summer moisture management',
        'Optimized programming to slash monthly energy bills',
      ],
      image: '/images/iaq_air_cleaner.jpg',
      icon: Sparkles,
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeTab === 'all') return true;
    return s.id === activeTab;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heatonGreen-50 border border-heatonGreen-200 text-heatonGreen-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-heatonGreen-600" />
            Complete Green Bay &amp; Northeast Wisconsin Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight">
            Full-Spectrum HVAC, Boilers &amp; Heat Pumps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Servicing all major brands with an exclusive 60-day repair guarantee and 100% upfront pricing.
          </p>
        </div>

        {/* 6 Separated Category Tabs (User Navigation Standard) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-heatonGreen-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-heatonGreen-900 hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-fireOrange-300"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heatonGreen-950/80 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-heatonGreen-950/90 text-fireOrange-400 border border-white/10 backdrop-blur-sm">
                      {service.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-heatonGreen-900 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-fireOrange-600" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-heatonGreen-950 group-hover:text-fireOrange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2 pt-4 border-t border-slate-200/80">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fireOrange-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.serviceId)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-heatonGreen-900 hover:bg-fireOrange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Get Estimate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:9209778338"
                      className="p-2.5 rounded-xl border border-slate-300 hover:border-fireOrange-500 bg-white text-slate-700 hover:text-fireOrange-600 transition-colors"
                      title="Call (920) 977-8338"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

