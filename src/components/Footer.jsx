import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-heatonGreen-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-heatonGreen-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-heatonGreen-800">
          
          {/* Col 1: Brand & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <img 
              src="/images/logo.png" 
              alt="Heaton Heating & Cooling" 
              className="h-14 w-auto object-contain brightness-110"
            />
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Heaton Heating and Cooling, LLC is a locally owned mechanical contractor operated by <strong className="text-white">Chris Heaton</strong>. We provide 24/7 emergency furnace repair, central AC, heat pumps, and boiler services across Green Bay, Brown County, and Northeast Wisconsin—all backed by our written 60-day repair guarantee.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-fireOrange-500 shrink-0 mt-0.5" />
                <span>1149 Sandstone Pl, Green Bay, WI 54313</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-fireOrange-500 shrink-0" />
                <a href="tel:9209778338" className="text-white font-bold hover:text-fireOrange-400 transition-colors">
                  (920) 977-8338
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-fireOrange-500 shrink-0" />
                <a href="mailto:heatonheatingandcooling@gmail.com" className="hover:text-white transition-colors">
                  heatonheatingandcooling@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Furnace Diagnostic &amp; Emergency Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Central AC &amp; Ductless Mini-Splits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Hydronic Boiler &amp; Radiator Heating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cold-Climate Heat Pumps &amp; Dual Fuel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  24-Point Seasonal Safety Tune-Ups
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Smart Wi-Fi Thermostats &amp; Indoor Air
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Regional Coverage
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <div>• Green Bay (54313 HQ)</div>
              <div>• Howard &amp; Suamico, WI</div>
              <div>• De Pere &amp; Ashwaubenon, WI</div>
              <div>• Bellevue, Allouez &amp; Hobart, WI</div>
              <div>• Pulaski, Wrightstown &amp; Denmark</div>
              <div>• Door &amp; Oconto Counties</div>
              <div className="pt-2">
                <a href="#service-areas" className="text-fireOrange-400 font-bold hover:underline">
                  View Full Coverage Matrix &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Dispatch Hours & Certifications (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Emergency Hours
            </h4>
            <div className="p-3 rounded-xl bg-heatonGreen-900 border border-heatonGreen-800 text-[11px] space-y-1.5">
              <div className="font-bold text-fireOrange-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                24/7/365 On-Call
              </div>
              <p className="text-slate-400">Regular: Mon-Fri 7am - 5pm</p>
              <p className="text-slate-400">Emergency: 24h Night &amp; Weekend</p>
            </div>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px]">
              <span className="inline-flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amberGold-400" />
                60-Day Guarantee On All Repairs
              </span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <HeartHandshake className="w-3.5 h-3.5 text-frostCyan-400" />
                Chris Heaton Owner-Operated
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Heaton Heating and Cooling, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9209778338" className="hover:text-slate-300 transition-colors">
              Phone: (920) 977-8338
            </a>
            <span>•</span>
            <a href="mailto:heatonheatingandcooling@gmail.com" className="hover:text-slate-300 transition-colors">
              heatonheatingandcooling@gmail.com
            </a>
            <span>•</span>
            <span>1149 Sandstone Pl, Green Bay, WI 54313</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

