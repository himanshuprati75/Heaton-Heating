import { useState } from 'react';
import { Camera, ZoomIn, X, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CraftsmanshipGallery() {
  const [activeModalImg, setActiveModalImg] = useState(null);

  const projects = [
    {
      title: 'High-Efficiency 96% AFUE Gas Furnace Replacement',
      location: 'Green Bay (Howard/Suamico), WI',
      category: 'Residential Heating',
      desc: 'Precision replacement of a failed 20-year-old furnace with a variable-speed 96% AFUE unit and custom transition ductwork, backed by our 60-day guarantee.',
      image: '/images/furnace_install.jpg',
      specs: '96% AFUE Variable Speed • Sealed Combustion • 60-Day Guarantee',
    },
    {
      title: 'Modulating Condensing Boiler & Hydronic Radiator Overhaul',
      location: 'De Pere, WI',
      category: 'Boilers & Radiators',
      desc: 'Complete boiler room upgrade including energy-saving circulator pump, expansion tank, air purger, and zone valves for balanced whole-home warmth.',
      image: '/images/boiler_piping.jpg',
      specs: 'High-Efficiency Boiler • Multi-Zone Balancing • Pressure Tested',
    },
    {
      title: 'Multi-Zone Ductless Mini-Split Heat Pump Installation',
      location: 'Howard, WI',
      category: 'Ductless Heat Pumps',
      desc: 'Whisper-quiet multi-head ductless installation for a 2nd-floor home addition, providing independent heating and summer cooling year-round.',
      image: '/images/heatpump_install.jpg',
      specs: 'Multi-Head Inverter • Independent Remotes • Sub-Zero Heating Output',
    },
    {
      title: 'High-SEER2 Central Air Conditioner & Pad Replacement',
      location: 'Ashwaubenon, WI',
      category: 'Air Conditioning',
      desc: 'Same-day emergency AC replacement with heavy-duty composite equipment pad, electrical disconnect box, and nitrogen-purged lines.',
      image: '/images/mini_splits.jpg',
      specs: '16+ SEER2 High Efficiency • Environmentally Safe Puron • Quiet Fan',
    },
    {
      title: 'Cold-Climate Heat Pump with Gas Hybrid Furnace',
      location: 'Sturgeon Bay (Door County), WI',
      category: 'Dual-Fuel Hybrid',
      desc: 'Dual-fuel hybrid heating setup for a coastal Door County home, automatically selecting the most economical fuel source between electric and gas.',
      image: '/images/commercial_ac.jpg',
      specs: 'Hybrid Dual-Fuel • Outdoor Temperature Sensor • Low Operational Cost',
    },
    {
      title: 'Whole-Home Aprilaire Media Filtration & Smart Wi-Fi',
      location: 'Bellevue, WI',
      category: 'Air Quality & Controls',
      desc: 'Installed central MERV 13 high-capacity media air filtration alongside an Ecobee smart Wi-Fi thermostat for automated indoor comfort & freeze alerts.',
      image: '/images/iaq_air_cleaner.jpg',
      specs: 'MERV 13 Media Filter • Smart Phone Alerts • Freeze Defense',
    },
  ];

  return (
    <section id="craftsmanship" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-500/20 text-fireOrange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-500/30">
            <Camera className="w-4 h-4" />
            Verified Jobsite Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Real Work Across Green Bay &amp; Northeast Wisconsin
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Every installation and repair is personally overseen by Chris Heaton and backed by our written 60-day guarantee.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(proj)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-800/90 border border-slate-700 hover:border-fireOrange-500/50 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-fireOrange-400 border border-white/10 backdrop-blur-sm">
                  {proj.category}
                </span>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-fireOrange-500 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-fireOrange-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-fireOrange-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  {proj.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveModalImg(null)}
          >
            <div 
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImg(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96">
                <img 
                  src={activeModalImg.image} 
                  alt={activeModalImg.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-fireOrange-400 font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{activeModalImg.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeModalImg.title}</h3>
                <p className="text-xs text-slate-300 mt-2">{activeModalImg.desc}</p>
                <div className="mt-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  {activeModalImg.specs}
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href="tel:9209778338"
                    className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Request Similar Installation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

