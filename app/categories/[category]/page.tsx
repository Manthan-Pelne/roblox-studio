"use client"
import React from 'react';
import { Download, Copy, ChevronRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

const CategoryPage = () => {
  const params = useParams();
  const catName = params?.category || "Shirts"; 
  const displayName = catName ? catName.replace(/-/g, ' ') : "Category";

  const products = [
    { id: 1, name: "Cyberpunk Vest", category: "Shirts", image: "/1758785091458-TRASHER.png", price: "Free" },
    { id: 2, name: "Y2K Baggies", category: "Pants", image: "/1758793362119-group.png", price: "Free" },
    { id: 3, name: "Anime Katana", category: "Accessory", image: "/1758785091458-TRASHER.png", price: "Free" },
    { id: 4, name: "Streetwear Hoodie", category: "Shirts", image: "/1758793362119-group.png", price: "Free" },
    { id: 5, name: "Tactical Cargo", category: "Pants", image: "/1758785091458-TRASHER.png", price: "Free" },
    { id: 6, name: "Gothic Corset", category: "Shirts", image: "/1758793362119-group.png", price: "Free" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] pb-20">
      
      {/* --- 1. BOUNDED HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <section className="relative h-[450px] w-full bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
          {/* Background Technical Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Animated Glow Figure */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

          <div className="relative z-10 h-full flex flex-col md:flex-row items-center px-10 md:px-20 gap-10">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <span>Collections</span>
                <ChevronRight size={10} />
                <span className="text-primary">{displayName}</span>
              </nav>

              <div className="relative inline-block">
                {/* Highlighter Figure */}
                <div className="absolute -inset-x-4 -inset-y-2 bg-primary/10 border-l-4 border-primary rounded-r-lg"></div>
                <h1 className="relative text-6xl md:text-8xl font-black text- tracking-tighter uppercase italic leading-none">
                  {displayName}<span className="text-primary">.</span>
                </h1>
              </div>

              <p className="max-w-md text-zinc-400 font-medium text-sm leading-relaxed">
                Unlock professional-grade <span className="text-white italic">Roblox Assets</span>. 
                Optimized for performance and aesthetic excellence.
              </p>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Globe size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-zinc-300 uppercase">Global Assets</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Zap size={14} className="text-secondary" />
                  <span className="text-[10px] font-bold text-zinc-300 uppercase">Instant Install</span>
                </div>
              </div>
            </div>

            {/* Right Figure: Technical Wireframe Visual */}
            <div className="relative hidden md:flex items-center justify-center w-64 h-64 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
                <div className="absolute inset-4 border border-primary/20 rounded-2xl rotate-45"></div>
                <div className="absolute inset-10 border border-secondary/20 rounded-full animate-spin-slow"></div>
                <ShieldCheck size={80} className="text-white opacity-20" strokeWidth={1} />
                <span className="absolute bottom-4 text-[10px] font-mono text-primary/50 uppercase tracking-widest">Authenticated</span>
            </div>
          </div>
        </section>
      </div>

      {/* --- 2. GRID TOOLBAR --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-between items-end border-b border-zinc-200 dark:border-zinc-900 pb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tighter uppercase">Available Items</h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Showing {products.length} units</p>
        </div>
        <div className="flex gap-2">
            <button className="h-10 px-6 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Sort By: Newest
            </button>
        </div>
      </div>

      {/* --- 3. SLEEK PRODUCT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group relative flex flex-col">
              {/* Product Frame */}
              <div className="relative aspect-video rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="px-8 py-3 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95">
                        Download Now
                    </button>
                </div>

                <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                        {item.price} Asset
                    </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-6 flex justify-between items-start px-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <span>Template</span>
                    <span>•</span>
                    <span>Studio 2026</span>
                  </div>
                </div>
                <button className="p-3 bg-zinc-200/50 dark:bg-zinc-900 rounded-2xl hover:text-primary transition-colors">
                  <Copy size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;