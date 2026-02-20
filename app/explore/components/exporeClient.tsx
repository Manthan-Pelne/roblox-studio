"use client"
import { ArrowUpRight, Globe, Search, SlidersHorizontal, Sparkles, Zap } from 'lucide-react';
import ProductCard from '@/app/components/productCard';
import Pagination from '@/app/components/Pagination';

const ExploreClient = ({ initialProducts, currentPage, totalPages }: any) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505] p-4 md:p-6 rounded-3xl border transition-colors duration-500">
      
      {/* --- 1. SLEEK EXPLORE HERO --- */}
 <section className="relative  w-full py-5 flex items-center justify-center overflow-hidden rounded-3xl
      /* Dynamic Backgrounds */
      bg-zinc-50 dark:bg-zinc-950 
      text-zinc-900 dark:text-zinc-50 
      transition-colors duration-500 shadow-md mx-auto border border-zinc-200 dark:border-zinc-800">
      
      {/* 1. Dynamic Background Mesh (Adapts to Light/Dark) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Blobs (Warm/Soft) vs Dark Mode Blobs (Neon/Deep) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] 
          bg-secondary/10 dark:bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
          bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Catchy Floating Figures */}
      <div className="absolute inset-0 pointer-events-none select-none">
        
        {/* TOP LEFT: System Monitor Card */}
        <div className="absolute top-16 left-16 animate-float hidden lg:block">
           <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl shadow-xl -rotate-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-mono tracking-widest opacity-60 uppercase">Node_Active</span>
              </div>
              <p className="text-xs font-black flex items-center gap-2"> 
                <Globe size={14} className="text-primary" /> GLOBAL_SYNC
              </p>
           </div>
        </div>

        {/* BOTTOM RIGHT: The "Unique Figure" (3D Glass Card) */}
        <div className="absolute bottom-16 right-10 animate-float-delayed hidden lg:block">
          <div className="relative group">

            <div className="absolute inset-0 dark:bg-secondary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gradient-to-br from-white/80 to-white/20 dark:from-zinc-800/80 dark:to-zinc-800/20 backdrop-blur-2xl border border-white/50 dark:border-zinc-700/50 p-8 rounded-[2.5rem] shadow-2xl rotate-12">
              <p className="text-4xl font-black italic tracking-tighter leading-none flex items-center"><Zap className="text-primary mb-3" fill="currentColor" size={32} /> 200+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mt-1">Assets</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          border border-zinc-200 dark:border-zinc-800 
          bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl mb-10
          shadow-sm hover:shadow-md transition-all cursor-default group">
                        <div className="absolute  rotate-90 -inset-1 bg-gradient-to-r from-secondary rounded-[2.1rem] blur opacity-30 dark:opacity-50 group-focus-within:opacity-50 transition duration-500"></div>
          <Sparkles size={16} className="text-primary group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-[11px] font-black uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-400">
            The Infinite Repository
          </span>
        </div>
        
        {/* Kinetic Hero Title */}
        <h1 className="text-7xl flex gap-5 md:text-[100px] font-black tracking-tighter uppercase italic leading-[0.85] mb-8 select-none">
          Explore
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary dark:from-zinc-100 dark:to-primary">
            Studio.
          </span>
        </h1>

        {/* 4. Adaptive Search Bar */}
        <div className="relative border p-3 rounded-2xl max-w-2xl mx-auto group">
           <p className='dark:text-muted/50'>Lorem ipsum, dolor sit amet consectetur adipisicing debitis porro obcaecati at atque laborum mollitia dolorem temporibus illum, repellat aliquam dolorum!</p>
        </div>

        {/* Dynamic Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {['Assets', 'Blueprints', 'Archives', 'Analytics'].map((item) => (
            <button key={item} className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-primary transition-all">
              // {item}
            </button>
          ))}
        </div>
      </div>
    </section>

      {/* --- 2. FILTER & TOOLBAR --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 mb-10 px-4">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tight text-zinc-800 dark:text-zinc-200">The Collection</h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Showing {initialProducts.length} curated assets</p>
        </div>
      </div>

      {/* --- 3. THE MASONRY-STYLE GRID --- */}
      <main className="pb-10">
        <ProductCard href="categories" prod={initialProducts} />
        <Pagination
        currentPage={currentPage} 
        totalPages={totalPages}
        />
      </main>
   

    </div>
  );
};

export default ExploreClient;