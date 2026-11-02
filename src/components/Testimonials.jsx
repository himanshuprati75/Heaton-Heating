import { Star, CheckCircle2, MapPin, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Jason & Linda M.',
      location: 'Green Bay (Howard/Suamico), WI',
      service: 'Early-Morning 6:00 AM Emergency Furnace Repair',
      date: 'Verified Homeowner',
      rating: 5,
      text: 'Woke up at 5:45 AM during a bitter 10-below Wisconsin morning to a freezing house. The furnace was blowing cold air. Called Heaton around 6:00 AM expecting voicemail, but Chris answered immediately! He was at our home by 7:15 AM, replaced a dirty flame sensor and faulty ignitor, and our house was warm before the kids woke up for school. Unbelievable responsiveness!',
    },
    {
      name: 'Derek P.',
      location: 'De Pere, WI',
      service: 'Boiler & Circulator Pump Service',
      date: 'Hydronic Radiator System',
      rating: 5,
      text: 'Our hydronic boiler started making loud knocking sounds and two radiators upstairs were ice cold. Another contractor told us we needed a complete $12,000 replacement. Chris came out, actually inspected the system, and discovered a seized circulator pump and an air lock. Replaced the pump for a fraction of the cost, backed it with his 60-day guarantee, and it has worked perfectly since. Heaton is honest and trustworthy.',
    },
    {
      name: 'Amanda K.',
      location: 'Ashwaubenon, WI',
      service: 'Central AC Replacement & Tune-Up',
      date: 'Summer Installation',
      rating: 5,
      text: 'Chris gave us a free in-home estimate on a new central air unit after our 18-year-old system gave out in July. He explained SEER2 ratings clearly and didn’t try to oversell us on bells and whistles we didn’t need. His installation crew was clean, polite, and finished in one afternoon. Our electric bill is already down $65 this month!',
    },
    {
      name: 'Gary W.',
      location: 'Suamico / Door County Border, WI',
      service: 'Furnace Blower Motor Replacement',
      date: 'Sub-Zero Emergency',
      rating: 5,
      text: 'Heaton Heating and Cooling is the real deal. Straightforward, knowledgeable, and reliable. Chris replaced our blower motor on a Saturday with zero surprise overtime fees. Having a written 60-day guarantee on top gives total peace of mind. Highly recommend to anyone in Green Bay or Brown County.',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight">
            Trusted by Hundreds of Northeast Wisconsin Families
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Read real, verified reviews from homeowners across Green Bay, Howard, Suamico, De Pere, and Brown County.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-heatonGreen-950">{rev.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-fireOrange-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    60-DAY GUARANTEED
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">{rev.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregated Rating Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-black text-heatonGreen-950">4.9 / 5.0 Average Customer Rating</div>
              <div className="text-xs text-slate-500">Serving Green Bay, Howard, Suamico, De Pere &amp; Surrounding Counties</div>
            </div>
          </div>

          <a
            href="tel:9209778338"
            className="text-xs font-bold text-fireOrange-600 hover:text-fireOrange-700 hover:underline flex items-center gap-1"
          >
            <span>Have an emergency? Speak with Chris directly &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

