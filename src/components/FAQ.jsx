import { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, ShieldCheck } from 'lucide-react';

export default function FAQ({ onOpenCallModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is covered under your exclusive 60-Day Repair Guarantee?',
      a: 'Every repair completed by Heaton Heating and Cooling is backed by our full 60-day written guarantee. If the exact same issue reoccurs or the replaced part fails within 60 days of service, we will return and fix it immediately at zero additional charge to you.',
    },
    {
      q: 'How fast can you arrive for an emergency no-heat call in Green Bay?',
      a: 'We understand that sub-zero Wisconsin temperatures pose a severe risk to your family and can quickly freeze home water pipes. Our mobile service vans are equipped with universal parts and tools. We typically arrive within 30 to 60 minutes across Green Bay, Howard, Suamico, and De Pere.',
    },
    {
      q: 'Do you repair and maintain hydronic boilers and radiator systems?',
      a: 'Yes! Many older and custom homes in Green Bay and Brown County rely on boiler, baseboard, or radiant heating. We specialize in boiler maintenance, expansion tanks, zone valves, circulator pumps, and radiator air purging to ensure balanced, quiet warmth.',
    },
    {
      q: 'Which brands of heating and air conditioning equipment do you service?',
      a: 'We service and repair all major HVAC manufacturers, including Carrier, Trane, Lennox, Rheem, Goodman, York, Bryant, Amana, Heil, and Burnham boilers. Our technicians carry diagnostic instruments and universal replacement components on every service call.',
    },
    {
      q: 'What is a dual-fuel heat pump system and is it right for Northeast Wisconsin?',
      a: 'A dual-fuel system pairs an electric heat pump with a high-efficiency gas furnace. In moderate fall and spring weather (above 30°F), the heat pump heats your home with ultra-efficient electricity. When deep winter freezes hit, the system automatically switches to the gas furnace for maximum heat output, saving you up to 35% on annual heating bills.',
    },
    {
      q: 'Do you provide free estimates on new heating and AC system installations?',
      a: 'Yes, we offer 100% free, zero-obligation in-home replacement estimates. Chris Heaton will inspect your existing setup, perform a heat loss/gain calculation for your home square footage, and present straightforward options that fit your budget.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 text-fireOrange-700 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-200">
            <HelpCircle className="w-4 h-4 text-fireOrange-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight">
            Clear Answers to Your Heating &amp; Cooling Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our local Green Bay service, 60-day guarantee, and emergency dispatch.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-heatonGreen-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-fireOrange-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h4 className="text-base font-bold text-heatonGreen-950">Have a specific equipment or emergency question?</h4>
          <p className="text-xs text-slate-500 mt-1">Chris Heaton and the Green Bay dispatch team are ready 24/7.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9209778338"
              className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              Call (920) 977-8338
            </a>
            <a
              href="mailto:heatonheatingandcooling@gmail.com"
              className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

