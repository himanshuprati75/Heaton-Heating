import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Clock, Zap, CheckCircle2, AlertCircle, Sparkles, Flame, Snowflake, Wind, Droplets, Wrench } from 'lucide-react';

export default function CostCalculator({ selectedIssue, onSelectIssue, onLockInQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState('furnace-repair');
  const [homeSize, setHomeSize] = useState('medium');
  const [urgency, setUrgency] = useState('standard');

  const categories = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'heating', label: 'Furnaces & Heating' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'heatpumps', label: 'Heat Pumps' },
    { id: 'boilers', label: 'Boilers & IAQ' },
  ];

  const servicesData = {
    'furnace-repair': {
      category: 'heating',
      title: 'Furnace Diagnostic & Emergency Heat Repair',
      desc: 'Ignitor, flame sensor, draft inducer motor, and gas valve repair backed by our 60-day written guarantee.',
      baseRange: { standard: '$139 - $320', emergency: '$189 - $385' },
      eta: '30 - 60 mins',
      savings: 'Restores warmth quickly & prevents catastrophic pipe freeze-ups',
      icon: Flame,
    },
    'ac-repair': {
      category: 'ac',
      title: 'Central AC Diagnostic & Rapid Repair',
      desc: 'Refrigerant leak checks, capacitor, contactor, condenser motor, and electrical troubleshooting.',
      baseRange: { standard: '$149 - $340', emergency: '$195 - $410' },
      eta: '45 - 90 mins',
      savings: 'Restores crisp cooling & reduces summer power draw',
      icon: Snowflake,
    },
    'boiler': {
      category: 'boilers',
      title: 'Hydronic Boiler & Radiator Heating Repair',
      desc: 'Circulator pump, expansion tank, air purger, zone valve, and pressure relief valve diagnostics.',
      baseRange: { standard: '$185 - $460', emergency: '$245 - $540' },
      eta: '45 - 75 mins',
      savings: 'Eliminates cold radiator spots & preserves boiler lifespan',
      icon: Droplets,
    },
    'heatpump': {
      category: 'heatpumps',
      title: 'Heat Pump & Dual-Fuel Inverter Service',
      desc: 'Defrost control board diagnostic, reversing valve check, and dual-fuel auxiliary heating optimization.',
      baseRange: { standard: '$175 - $420', emergency: '$235 - $495' },
      eta: '45 - 75 mins',
      savings: 'Cuts auxiliary electric strip cycling costs by up to 35%',
      icon: Wind,
    },
    'tune-up': {
      category: 'boilers',
      title: '24-Point Seasonal Safety & Efficiency Tune-Up',
      desc: 'Full safety audit including carbon monoxide testing, heat exchanger inspection, and electrical check.',
      baseRange: { standard: '$89 - $149 Special', emergency: '$129 - $179' },
      eta: 'Next Available Slot',
      savings: 'Prevents 85% of sudden Wisconsin winter breakdowns',
      icon: Wrench,
    },
    'replacement': {
      category: 'all',
      title: 'New High-Efficiency System Replacement',
      desc: 'Turnkey installation of a modern 96%+ AFUE gas furnace or high-SEER2 central air system with free in-home estimate.',
      baseRange: { standard: '$4,800 - $9,600', emergency: 'Free On-Site Estimate' },
      eta: '1-2 day turnaround',
      savings: 'Up to 30% reduction on monthly gas and electric utility bills',
      icon: Sparkles,
    },
  };

  const currentService = servicesData[selectedService] || servicesData['furnace-repair'];

  const filteredServices = Object.entries(servicesData).filter(([key, val]) => {
    if (activeCategory === 'all') return true;
    return val.category === activeCategory;
  });

  const handleServiceSelect = (key) => {
    setSelectedService(key);
    onSelectIssue(key);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 border border-fireOrange-200 text-fireOrange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-fireOrange-600" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight">
            Instant HVAC Cost &amp; Response Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            See realistic Green Bay &amp; Northeast Wisconsin service pricing before you share any contact information.
          </p>
        </div>

        {/* 5 Separated Category Tabs (User Navigation Mandate) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 shadow-inner overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-heatonGreen-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-heatonGreen-900 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector & Options (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Service Selection Cards */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 1: Choose Your HVAC Need
                </span>
                <span className="text-xs font-bold text-fireOrange-600">
                  {filteredServices.length} options available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredServices.map(([key, item]) => {
                  const Icon = item.icon;
                  const isSelected = selectedService === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleServiceSelect(key)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-fireOrange-50/70 border-fireOrange-500 ring-2 ring-fireOrange-500/20 shadow-sm'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`p-2 rounded-xl transition-colors shrink-0 ${
                          isSelected 
                            ? 'bg-fireOrange-500 text-white' 
                            : 'bg-white text-slate-700 group-hover:text-fireOrange-600 border border-slate-200'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-fireOrange-950' : 'text-slate-900'}`}>
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-medium">Est. Range:</span>
                        <span className="font-extrabold text-heatonGreen-900">
                          {item.baseRange.standard}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Home Size & Urgency Configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Home Size */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 2: Home Square Footage
                </span>
                <div className="space-y-2">
                  {[
                    { id: 'small', label: 'Under 1,400 sq ft', desc: 'Ranch / starter home' },
                    { id: 'medium', label: '1,400 - 2,600 sq ft', desc: 'Standard single-family home' },
                    { id: 'large', label: '2,600+ sq ft', desc: 'Large 2-story or multi-zone home' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setHomeSize(size.id)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        homeSize === size.id
                          ? 'bg-heatonGreen-50 border-heatonGreen-600 font-bold text-heatonGreen-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{size.label}</span>
                      <span className="text-[10px] text-slate-400">{size.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 3: Response Urgency
                </span>
                <div className="space-y-2">
                  {[
                    { id: 'standard', label: 'Standard Appointment', badge: 'NEXT AVAILABLE' },
                    { id: 'emergency', label: '24/7 Immediate Emergency', badge: 'PRIORITY DISPATCH' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setUrgency(u.id)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        urgency === u.id
                          ? 'bg-fireOrange-50 border-fireOrange-500 font-bold text-fireOrange-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{u.label}</span>
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                        urgency === u.id ? 'bg-fireOrange-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {u.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Output Card & Reciprocity Lock-in (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-heatonGreen-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-heatonGreen-800 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-fireOrange-600/30 via-frostCyan-500/20 to-transparent blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-heatonGreen-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-fireOrange-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-fireOrange-400">
                      Live Estimate Output
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                    60-DAY WARRANTY
                  </span>
                </div>

                {/* Selected Service Title */}
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentService.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Estimated Pricing Window:</div>
                  <div className="text-3xl sm:text-4xl font-black text-fireOrange-400 mt-1">
                    {urgency === 'emergency' ? currentService.baseRange.emergency : currentService.baseRange.standard}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-fireOrange-400 shrink-0" />
                    Backed by Chris Heaton’s 60-Day Guarantee on All Repairs
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-fireOrange-400" />
                      Arrival Window:
                    </div>
                    <div className="font-bold text-white mt-1">
                      {currentService.eta}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-frostCyan-400" />
                      Service Focus:
                    </div>
                    <div className="font-bold text-white mt-1 truncate">
                      Long-Term Reliability
                    </div>
                  </div>
                </div>

                {/* Web Voucher Courtesy Callout */}
                <div className="p-3.5 rounded-xl bg-fireOrange-500/20 border border-fireOrange-500/40 text-xs text-slate-200">
                  <div className="font-bold text-fireOrange-300 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-fireOrange-400" />
                    Web Courtesy Credit Applied: -$50.00 OFF
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Claim voucher code <strong className="text-white">HEATON50-DISPATCH</strong> on the dispatch form below.
                  </div>
                </div>

                {/* Lock In Button (Reciprocity Transition) */}
                <button
                  onClick={() => onLockInQuote(selectedService)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-fireOrange-600 to-fireOrange-500 hover:from-fireOrange-500 hover:to-fireOrange-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 btn-emergency-glow"
                >
                  <span>Lock In $50 Voucher &amp; Dispatch Tech</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  Or call directly for immediate emergency dispatch: <a href="tel:9209778338" className="text-fireOrange-400 font-bold hover:underline">(920) 977-8338</a>
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

