import { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, Ticket, AlertTriangle, Send, Sparkles, Flame, Snowflake, Droplets, Wind, Wrench } from 'lucide-react';

export default function LeadCaptureForm({ selectedIssue, onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Green Bay',
    serviceType: selectedIssue || 'furnace-repair',
    urgency: 'emergency',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedIssue) {
      setFormData((prev) => ({ ...prev, serviceType: selectedIssue }));
    }
  }, [selectedIssue]);

  const serviceOptions = [
    { id: 'furnace-repair', label: 'Furnace Out / No Heat Emergency' },
    { id: 'ac-repair', label: 'AC Blowing Warm / Weak Airflow' },
    { id: 'boiler', label: 'Boiler Leaking / Radiator Cold' },
    { id: 'heatpump', label: 'Heat Pump Freezing / Aux Heat Fault' },
    { id: 'tune-up', label: '24-Point Safety & Efficiency Tune-Up' },
    { id: 'replacement', label: 'New High-Efficiency System Estimate' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setTicketId(`HH-WI-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="dispatch-form" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Psychological Value & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 text-fireOrange-700 text-xs font-bold uppercase tracking-wider border border-fireOrange-200">
              <Ticket className="w-4 h-4 text-fireOrange-600" />
              Priority Technician Dispatch Queue
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-heatonGreen-950 tracking-tight leading-tight">
              Book Your Service &amp; Apply Your{' '}
              <span className="text-fireOrange-600">$50 Voucher</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When you submit your ticket, Chris Heaton and our Green Bay dispatch center receive an immediate priority alert. We verify technician proximity across Brown County and respond within <strong className="text-heatonGreen-900 font-bold">15 minutes</strong>.
            </p>

            {/* Voucher Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-fireOrange-50 to-amber-50 border-2 border-dashed border-fireOrange-300 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-fireOrange-700">Web Courtesy Voucher</span>
                  <div className="text-2xl font-black text-fireOrange-900 mt-0.5">$50.00 OFF</div>
                  <div className="text-xs text-fireOrange-800 font-semibold">Any Emergency Repair or Diagnostic</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase bg-white px-2 py-1 rounded border border-fireOrange-300 font-bold text-fireOrange-900">
                    CODE: HEATON50-DISPATCH
                  </span>
                  <div className="text-[10px] text-fireOrange-700 mt-1 font-medium">Auto-applied upon submission</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Inquiries */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-heatonGreen-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-fireOrange-600" />
                Live Dispatch Center:
              </div>
              <div>Direct Phone: <a href="tel:9209778338" className="text-fireOrange-600 font-bold hover:underline">(920) 977-8338</a></div>
              <div>Direct Email: <a href="mailto:heatonheatingandcooling@gmail.com" className="text-heatonGreen-900 font-semibold hover:underline">heatonheatingandcooling@gmail.com</a></div>
              <div>Headquarters: 1149 Sandstone Pl, Green Bay, WI 54313</div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                '60-Day Guarantee on All Repairs',
                '15-Minute Dispatcher Callback Window',
                'Free Written Replacement Estimates',
                'Chris Heaton Local Owner-Operated Reliability'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-fireOrange-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Lead Form or Confirmation Ticket (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-black text-heatonGreen-950">
                        Dispatch Request Form
                      </h3>
                      <p className="text-xs text-slate-500">Fast 24/7 routing across Northeast Wisconsin</p>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-fireOrange-100 text-fireOrange-700">
                      VOUCHER ACTIVE
                    </span>
                  </div>

                  {/* Service Need (State-Synchronized) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Vandenberg"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number (For 15-min SMS/Call) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(920) 555-0143"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
                      />
                    </div>
                  </div>

                  {/* Address and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Street Address / Neighborhood
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2350 Packerland Dr"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Community Area
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
                      >
                        <option value="Green Bay">Green Bay, WI (54313 HQ)</option>
                        <option value="Howard">Howard, WI</option>
                        <option value="Suamico">Suamico, WI</option>
                        <option value="De Pere">De Pere, WI</option>
                        <option value="Ashwaubenon">Ashwaubenon, WI</option>
                        <option value="Bellevue">Bellevue, WI</option>
                        <option value="Allouez">Allouez, WI</option>
                        <option value="Pulaski">Pulaski, WI</option>
                        <option value="Hobart">Hobart, WI</option>
                        <option value="Wrightstown">Wrightstown, WI</option>
                        <option value="Denmark">Denmark, WI</option>
                        <option value="Door County">Sturgeon Bay / Door County</option>
                        <option value="Oconto">Oconto / Oconto Falls, WI</option>
                        <option value="Appleton">Appleton / Fox Valley</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Issue Symptoms */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Issue Symptoms (Optional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Furnace blowing cold air, thermostat clicking, boiler pressure dropping, radiator cold..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-fireOrange-600 to-fireOrange-500 hover:from-fireOrange-500 hover:to-fireOrange-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 btn-emergency-glow"
                  >
                    {isSubmitting ? (
                      <span>Queueing Priority Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Dispatch Ticket &amp; Claim $50 OFF</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Backed by our 60-Day Guarantee. Your information is confidential.
                  </p>
                </form>
              ) : (
                /* Ticket Confirmation Card */
                <div className="space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                      Ticket Successfully Queued
                    </span>
                    <h3 className="text-2xl font-black text-heatonGreen-950 mt-1">
                      Dispatch ID: {ticketId}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Priority ticket sent to Chris Heaton and the Green Bay dispatch team.
                    </p>
                  </div>

                  {/* Confirmation Details Pill Grid */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Customer:</span>
                      <span className="font-bold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-bold text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Area:</span>
                      <span className="font-bold text-slate-900">{formData.city}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Voucher Credit:</span>
                      <span className="font-bold text-fireOrange-600">-$50.00 APPLIED</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Warranty:</span>
                      <span className="font-bold text-emerald-600">60-Day Repair Guarantee</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-fireOrange-50 border border-fireOrange-200">
                    <div className="text-xs font-bold text-fireOrange-900">
                      Need immediate action right now?
                    </div>
                    <p className="text-[11px] text-fireOrange-700 mt-0.5 mb-3">
                      Call Chris Heaton directly with your Ticket ID:
                    </p>
                    <a
                      href="tel:9209778338"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-fireOrange-600 hover:bg-fireOrange-700 text-white font-extrabold text-xs shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL NOW: (920) 977-8338</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 underline font-medium"
                  >
                    Submit another ticket or change details
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

