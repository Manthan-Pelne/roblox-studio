import React from 'react';
import { Shield, Rocket, Users, Code, Zap, Globe, ArrowDown } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 rounded-3xl dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-primary selection:text-black">
      
      {/* 1. ARCHITECTURAL HEADER */}
      <section className="relative pt-20 pb-20 px-6 border-b border-zinc-200 dark:border-zinc-800 ">
                <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-secondary/20 border border-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[20px] font-black uppercase tracking-[0.5em] text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            // About Us
          </p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
            Revolutionizing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-zinc-900 dark:from-zinc-100 dark:to-zinc-600">
              Roblox Workflows.
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium ">
            We build the bridge between high-end architectural design and the Roblox ecosystem. 
            Providing developers with elite templates that skip the grind and jump straight to the vision.
          </p>
        </div>
      </section>

      {/* 2. THE CORE PILLARS (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Speed */}
          <div className="group p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all duration-500">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-primary" size={24} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-3">Instant Deployment</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              Don't waste hours on basic scaffolding. Our templates come pre-optimized for performance, lighting, and global scripts.
            </p>
          </div>

          {/* Card 2: Quality */}
          <div className="md:col-span-2 group p-8 rounded-[2.5rem] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border border-transparent overflow-hidden relative">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-black uppercase italic mb-4">Studio-Grade Precision</h3>
                <p className="max-w-md opacity-70 text-lg">
                  Every asset is vetted for clean hierarchy, optimized mesh counts, and seamless integration into existing projects.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="px-4 py-1 rounded-full border border-white/20 dark:border-black/20 text-[10px] font-bold tracking-widest uppercase">Mesh-Optimized</span>
                <span className="px-4 py-1 rounded-full border border-white/20 dark:border-black/20 text-[10px] font-bold tracking-widest uppercase">PBR Textures</span>
              </div>
            </div>
            {/* Background Figure */}
            <Code size={200} className="absolute -right-10 -bottom-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* Card 3: Community */}
          <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-800/40 border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col md:flex-row items-center gap-8">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-zinc-100 dark:border-zinc-900 bg-zinc-300 dark:bg-zinc-700 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase italic">Trusted by 5,000+ Devs</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Join the network of creators building the next generation of Metaverse experiences.</p>
            </div>
          </div>

          {/* Card 4: Security */}
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center justify-center">
            <Shield className="text-primary mb-4" size={48} />
            <h3 className="text-xl font-black uppercase">Malware Free</h3>
            <p className="text-zinc-500 text-xs mt-2">100% clean source code. No hidden backdoors.</p>
          </div>

        </div>
      </section>

      {/* 3. THE "MISSION" STATMENT */}
      <section className="py-20  bg-primary rounded-3xl shadow-md text-white dark:text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[1.0]">
            We build tools, <br />
            You build <br />
            Worlds.
          </h2>
          <div className="space-y-6">
            <p className="text-xl font-bold leading-tight">
              Our mission is to democratize high-end Roblox development. No more gatekeeping professional assets.
            </p>
          </div>
        </div>
        {/* Kinetic Text Background */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[20rem] font-black opacity-5 select-none whitespace-nowrap">
            ROBLOX CREATIVE ARCHIVE
        </div>
      </section>

      {/* 4. TEAM / FOOTER CALL TO ACTION */}
      <section className="py-24 text-center">
        <h2 className="text-[10px] font-black tracking-[1em] opacity-30 uppercase mb-8">Ready to evolve?</h2>
        <a href="/" className="inline-block text-4xl md:text-6xl font-black italic hover:text-primary transition-colors underline decoration-4 underline-offset-8">
            GET STARTED NOW
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;