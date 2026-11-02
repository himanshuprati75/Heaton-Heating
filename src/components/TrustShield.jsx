import { ShieldCheck, Award, Clock, DollarSign, CheckCircle2, HeartHandshake, Sparkles, Wrench } from 'lucide-react';

export default function TrustShield({ onOpenCallModal }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '60-Day Repair Guarantee',
      badge: 'PEACE OF MIND',
      desc: 'Every heating and AC repair completed by Heaton is backed by a full 60-day written guarantee. If an issue reoccurs, we make it right at no cost.',
      highlight: '100% Written Warranty',
    },
    {
      icon: HeartHandshake,
      title: 'Chris Heaton Owner-Operated',
      badge: 'DIRECT ACCOUNTABILITY',
      desc: 'Based locally in Green Bay, WI. You work directly with Chris Heaton and trusted local technicians who take genuine pride in honest work.',
      highlight: 'Zero Franchise Middlemen',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Dispatch',
      badge: 'EARLY & LATE ON-CALL',
      desc: 'Rapid emergency routing when your furnace quits during a sub-zero Green Bay blizzard or AC gives out on a humid summer weekend.',
      highlight: 'Rapid Response Mobile Vans',
    },
    {
      icon: DollarSign,
      title: 'Free Estimates & Flat-Rate Pricing',
      badge: 'ZERO SURPRISES',
      desc: 'Free in-home replacement quotes and transparent flat-rate repair diagnostics upfront before any work starts. No unexpected overtime fees.',
      highlight: 'Guaranteed Written Estimates',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-500/20 text-fireOrange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-500/30">
            <ShieldCheck className="w-4 h-4" />
            The Heaton Heating Standard of Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Why Green Bay &amp; Brown County Homeowners Trust Heaton First
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Local craftsmanship, straightforward diagnostics, and a guaranteed 60-day warranty on every repair.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-fireOrange-500/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-fireOrange-500/20 text-fireOrange-400 border border-fireOrange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-fireOrange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-semibold text-fireOrange-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-heatonGreen-950 to-slate-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-fireOrange-500/20 text-fireOrange-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Emergency Dispatchers Standing By 24/7/365</div>
              <div className="text-xs text-slate-400">1149 Sandstone Pl, Green Bay, WI 54313 • Direct Line: (920) 977-8338</div>
            </div>
          </div>

          <a
            href="tel:9209778338"
            className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap btn-emergency-glow"
          >
            Call (920) 977-8338 Now
          </a>
        </div>

      </div>
    </section>
  );
}

