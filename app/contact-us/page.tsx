import React from 'react';
import { Terminal, Database, ShieldCheck, Layers, Cpu, Radio, ArrowRight, CornerDownRight } from 'lucide-react';

const TheoryContact = () => {
  return (
    <div className="min-h-screen bg-zinc-50 rounded-3xl overflow-hidden dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-primary selection:text-black">
      
      {/* 1. HERO THEORY SECTION */}
      <section className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto ">
        {/* Decorative Grid Figure */}
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-secondary/20 border border-primary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-primary"></span>
            <p className="text-xl font-black uppercase tracking-[0.5em] text-primary">
              contact us
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8">
            Sync your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-zinc-800 dark:from-zinc-100 dark:to-zinc-500">
              Environment.
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            In a decentralized digital landscape, the relationship between the architect and the archive is symbiotic. 
            We don't just provide assets; we provide the <span className="text-zinc-900 dark:text-white underline decoration-primary underline-offset-4">structural logic</span> required to build persistent worlds.
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY CARDS (THEORY BLOCKS) */}
      <section className="px-6 py-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Layers size={24} />,
            title: "Standardization",
            desc: "The theory that every Roblox asset must follow a uniform hierarchy. We eliminate technical debt before you even begin building."
          },
          {
            icon: <Cpu size={24} />,
            title: "Optimization",
            desc: "Balancing visual fidelity with engine constraints. Our templates prioritize draw-call efficiency and memory management protocols."
          },
          {
            icon: <Database size={24} />,
            title: "Open Access",
            desc: "Democratizing high-tier development by removing the paywalls behind professional-grade scaffolding and script environments."
          }
        ].map((item, i) => (
          <div key={i} className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-black uppercase italic mb-4">{item.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* 3. CONTACT INTERFACE & SYSTEM DATA */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: SYSTEM LOGS & INFO */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-black uppercase italic mb-6">Interface <br/>Specifications</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <Terminal className="mt-1 text-primary" size={18} />
                  <div>
                    <p className="text-[10px] font-bold uppercase opacity-40 mb-1">Response Protocol</p>
                    <p className="text-sm font-medium italic">Our neural network (Team) reviews all packets within 24 standard cycles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <ShieldCheck className="mt-1 text-primary" size={18} />
                  <div>
                    <p className="text-[10px] font-bold uppercase opacity-40 mb-1">Privacy Encryption</p>
                    <p className="text-sm font-medium italic">All data transmissions are subject to AES-256 secure tunneling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CATCHY FIGURE: THE "STATUS MONITOR" */}
            <div className="relative p-8 bg-zinc-950 text-white rounded-[2.5rem] overflow-hidden group">
              <div className="relative z-10 flex justify-between items-end h-32">
                 <div>
                   <p className="text-6xl font-black italic tracking-tighter">99.9%</p>
                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-50">Archive_Reliability</p>
                 </div>
                 <Radio className="text-primary animate-pulse" size={32} />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#3b82f630,transparent)] opacity-50" />
            </div>
          </div>

          {/* RIGHT: THE SLEEK FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-10 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group/input">
                  <label className="text-[10px] font-black uppercase tracking-widest mb-2 block opacity-40 group-focus-within/input:text-primary transition-colors">Identification</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-4 outline-none focus:border-primary transition-colors text-lg" />
                  <CornerDownRight className="absolute right-0 bottom-4 opacity-0 group-focus-within/input:opacity-100 transition-opacity text-primary" size={16} />
                </div>
                <div className="relative group/input">
                  <label className="text-[10px] font-black uppercase tracking-widest mb-2 block opacity-40 group-focus-within/input:text-primary transition-colors">Digital Address</label>
                  <input type="email" placeholder="Email@Network.com" className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-4 outline-none focus:border-primary transition-colors text-lg" />
                </div>
              </div>

              <div className="relative group/input">
                <label className="text-[10px] font-black uppercase tracking-widest mb-2 block opacity-40 group-focus-within/input:text-primary transition-colors">Core Objective</label>
                <textarea rows="4" placeholder="Describe the vision or technical error..." className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-4 outline-none focus:border-primary transition-colors text-lg resize-none" />
              </div>

              <button className="w-full group/btn flex items-center justify-between bg-primary dark:bg-white text-white dark:text-zinc-950 p-6 rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-black transition-all duration-500">
                <span className=" font-black uppercase tracking-[0.3em]">Send Your Request</span>
                <div className="w-10 h-10 bg-white/10 dark:bg-black/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER THEORY */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-900 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
          Built for the next generation of Roblox Architects. <br/>
          Conceptualized 2026.
        </p>
      </footer>
    </div>
  );
};

export default TheoryContact;