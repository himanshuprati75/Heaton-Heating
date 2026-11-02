import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Snowflake, Wind, Droplets, Wrench, Sparkles } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const commonIssues = [
    { id: 'furnace-repair', label: 'Furnace Out / No Heat Emergency', icon: Flame, tag: 'HIGH URGENCY' },
    { id: 'ac-repair', label: 'AC Blowing Warm / Weak Airflow', icon: Snowflake, tag: 'SUMMER PRIORITY' },
    { id: 'boiler', label: 'Boiler Leaking / Radiator Cold', icon: Droplets, tag: 'SPECIALTY' },
    { id: 'heatpump', label: 'Heat Pump Freezing / Aux Heat Fault', icon: Wind, tag: 'DUAL FUEL' },
    { id: 'tune-up', label: '24-Point Safety & Efficiency Tune-Up', icon: Wrench, tag: 'PREVENTIVE' },
    { id: 'replacement', label: 'New High-Efficiency System Estimate', icon: Sparkles, tag: 'FREE QUOTE' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-heatonGreen-950 via-heatonGreen-900 to-heatonGreen-950 text-white pt-8 pb-16 sm:pb-24 overflow-hidden border-b border-heatonGreen-800">
      
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-fireOrange-600/20 via-frostCyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 mb-6 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-fireOrange-500 animate-ping"></span>
          <span className="font-semibold text-fireOrange-300">Live Northeast Wisconsin Dispatch:</span>
          <span>Green Bay, Howard, Suamico, De Pere &amp; Brown County</span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-amberGold-400 hidden sm:inline-flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> 60-Day Guarantee On All Repairs
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Psychological Headline & Immediate Funnel (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Green Bay &amp; Northeast Wisconsin’s Trusted{' '}
              <span className="bg-gradient-to-r from-fireOrange-400 via-fireOrange-500 to-amberGold-400 bg-clip-text text-transparent">
                Heating &amp; Cooling Pros.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              When brutal Wisconsin sub-zero winter chills freeze your home or summer humidity peaks across the Fox Valley, downtime isn't an option. Operated by certified contractor <strong className="text-white font-semibold">Chris Heaton</strong> in Green Bay, WI, Heaton Heating &amp; Cooling delivers <strong className="text-fireOrange-400 font-semibold">24/7 emergency dispatch</strong>, an unmatched <strong className="text-amberGold-400 font-semibold">60-day repair guarantee</strong>, and zero overtime upcharges.
            </p>

            {/* Quick Issue Selector (CRO Hook: Force active engagement in <3 seconds) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fireOrange-400"></span>
                Select your system issue for instant estimate &amp; response:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {commonIssues.map((issue) => {
                  const Icon = issue.icon;
                  return (
                    <button
                      key={issue.id}
                      onClick={() => onSelectIssue(issue.id)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-fireOrange-400/60 transition-all duration-200 text-left shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-fireOrange-500/20 text-fireOrange-400 group-hover:bg-fireOrange-500 group-hover:text-white transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                          {issue.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 group-hover:bg-fireOrange-500 group-hover:text-white transition-colors shrink-0">
                        {issue.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:9209778338"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-fireOrange-600 to-fireOrange-500 hover:from-fireOrange-500 hover:to-fireOrange-600 text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span>CALL 24/7: (920) 977-8338</span>
              </a>

              <a
                href="#calculator"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/40"
              >
                <span>Calculate Repair Cost</span>
                <ArrowRight className="w-4 h-4 text-fireOrange-400" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                60-Day Guarantee on All Repairs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Chris Heaton Owner-Operated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Services All Major Brands
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Free Replacement Estimates
              </span>
            </div>

          </div>

          {/* Right Column: Visual Trust Hero Graphic with Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-heatonGreen-900/80 backdrop-blur-sm relative group">
                <img 
                  src="/images/hero_tech.jpg" 
                  alt="Heaton Heating & Cooling Technicians in Green Bay" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heatonGreen-950 via-heatonGreen-950/30 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-heatonGreen-950/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-fireOrange-400 uppercase tracking-wider">Green Bay, WI 54313 Hub</div>
                      <div className="text-sm font-extrabold text-white">Chris Heaton, Owner-Operator</div>
                      <div className="text-xs text-slate-300">1149 Sandstone Pl • 24/7 Mobile Dispatch</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-fireOrange-500/20 border border-fireOrange-400/30 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-fireOrange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 60-Day Guarantee Seal (Top Left) */}
              <div className="absolute -top-6 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl animate-pulse-subtle">
                <img 
                  src="/images/badge_60day.png" 
                  alt="60-Day Guarantee on All Repairs" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

              {/* Floating Badge 2: Local Emergency Seal (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl">
                <img 
                  src="/images/badge_local.png" 
                  alt="24/7 Emergency Dispatch All Major Brands" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

