import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Wrench, Users, PhoneCall, Building2, MapPin, Clock } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/team_crew.jpg" 
                alt="Heaton Heating & Cooling Service Team" 
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heatonGreen-950 via-heatonGreen-950/30 to-transparent"></div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-heatonGreen-950/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-fireOrange-400">Owner-Operated Care</span>
                    <h4 className="text-sm font-extrabold text-white">Chris Heaton, Owner-Operator</h4>
                    <p className="text-[11px] text-slate-300">1149 Sandstone Pl, Green Bay, WI 54313</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-fireOrange-500/20 text-fireOrange-400 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-amberGold-600">60-Day</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Guarantee</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-heatonGreen-950">24/7</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Emergency</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-fireOrange-600">Free</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Estimates</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 text-fireOrange-700 text-xs font-bold uppercase tracking-wider border border-fireOrange-200">
              <ShieldCheck className="w-4 h-4 text-fireOrange-600" />
              Our Story &amp; Northeast Wisconsin Commitment
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight leading-tight">
              Straightforward Advice, Proven Mechanical Skill &amp; Our 60-Day Promise
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded and operated by <strong className="text-heatonGreen-950 font-bold">Chris Heaton</strong> in Green Bay, Wisconsin, Heaton Heating &amp; Cooling was built on the premise that homeowners deserve honest, direct answers from their HVAC contractor—not aggressive commission-driven sales tactics.
              </p>
              <p>
                From sudden early-morning freeze calls at 6:00 AM when your furnace refuses to fire up, to stifling summer breakdowns where your AC fan stops spinning, we treat every home with urgency and total transparency. We service all major equipment brands, clearly diagnose what caused the failure, and offer an industry-rare <strong className="text-heatonGreen-950 font-bold">60-day written guarantee on every repair</strong>.
              </p>
              <p>
                When it’s time to replace aging furnaces, boilers, or central air conditioning, we provide free in-home estimates and calculate the exact sizing your property requires. No surprise overtime charges, no gimmicks—just dependable, local craftsmanship you can rely on year after year.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-heatonGreen-950 uppercase">60-Day Guarantee</h4>
                <p className="text-[11px] text-slate-500 mt-1">If the same repair issue reoccurs within 60 days, we fix it at zero charge.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-heatonGreen-950 uppercase">Local Accountability</h4>
                <p className="text-[11px] text-slate-500 mt-1">Direct communication with Chris Heaton. Zero call center runarounds.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-heatonGreen-950 uppercase">24/7/365 On-Call</h4>
                <p className="text-[11px] text-slate-500 mt-1">Available for urgent early morning and weekend Wisconsin freeze emergencies.</p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:9209778338"
                className="px-6 py-3 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Chris Heaton: (920) 977-8338</span>
              </a>

              <a
                href="mailto:heatonheatingandcooling@gmail.com"
                className="text-xs font-bold text-slate-700 hover:text-fireOrange-600 underline flex items-center gap-1.5"
              >
                <span>heatonheatingandcooling@gmail.com</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
