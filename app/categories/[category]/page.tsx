"use client"
import React from 'react';
import { Download, Copy, ChevronRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const CategoryPage = () => {
  const params = useParams();
  const catName = params?.category || "Shirts"; 
  const displayName = catName ? catName.replace(/-/g, ' ') : "Category";

  const products = [
    { id: 1, name: "Cyberpunk Vest", category: "Shirts", image: "/1758785091458-TRASHER.png",  },
    { id: 2, name: "Y2K Baggies", category: "Pants", image: "/1758793362119-group.png",  },
    { id: 3, name: "Anime Katana", category: "Accessory", image: "/1758785091458-TRASHER.png",  },
    { id: 4, name: "Streetwear Hoodie", category: "Shirts", image: "/1758793362119-group.png",  },
    { id: 5, name: "Tactical Cargo", category: "Pants", image: "/1758785091458-TRASHER.png",  },
    { id: 6, name: "Gothic Corset", category: "Shirts", image: "/1758793362119-group.png",  },
     { id: 7, name: "Cyberpunk Vest", category: "Shirts", image: "/1758785091458-TRASHER.png",  },
    { id: 8, name: "Y2K Baggies", category: "Pants", image: "/1758793362119-group.png",  },
    { id: 9, name: "Anime Katana", category: "Accessory", image: "/1758785091458-TRASHER.png",  },
    { id: 10, name: "Streetwear Hoodie", category: "Shirts", image: "/1758793362119-group.png",  },
    { id: 11, name: "Tactical Cargo", category: "Pants", image: "/1758785091458-TRASHER.png",  },
    { id: 12, name: "Gothic Corset", category: "Shirts", image: "/1758793362119-group.png",  },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] border rounded-3xl dark:bg-zinc-950 p-6 md:p-7 mt-3">
      
      {/* --- 1. BOUNDED HERO SECTION --- */}
     <section className="relative w-full bg-white dark:bg-[#050505] shadow-md overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800">
  
  {/* --- 1. MINIMALIST DECOR --- */}
  {/* Large background text for texture */}
  <div className="absolute -bottom-10 -left-10 select-none pointer-events-none opacity-[0.04] dark:opacity-[0.05]">
    <h2 className="text-[20rem] font-black leading-none">ROBLOX</h2>
  </div>

  <div className="relative z-10 flex flex-col lg:flex-row ">
    
    {/* --- 2. LEFT: CONTENT (60% width) --- */}
    <div className="flex-[1.5] p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Technical Collection 01</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8">
        {displayName}
      <span className='text-primary'> .</span>
      </h1>

<div className="max-w-md relative group">
  {/* Vertical Accent Line */}
  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-zinc-200 dark:via-zinc-800 to-transparent"></div>
  
  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
    Experience the next generation of <span className="text-black dark:text-white font-bold italic">Roblox development</span>. 
    Our assets are engineered for high-concurrency environments, featuring 
    <span className="text-black dark:text-white"> pixel-perfect textures</span> and 
    modular Luau integration. 
  </p>
  
  <div className="mt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
    <span>Verified Geometry</span>
    <span className="w-1 h-1 rounded-full bg-primary"></span>
    <span>Ready for Studio 2026</span>
  </div>
</div>


 </div>

    {/* --- 3. RIGHT: THE VISUAL (40% width) --- */}
    <div className="flex-1 bg-zinc-50 dark:bg-zinc-900/50 p-8 flex items-center justify-center relative group">
      {/* Centered Figure */}
      <div className="relative w-full aspect-square max-w-[320px]">
        {/* Floating Abstract Shape */}
        <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
        
        {/* Main Asset Image */}
        <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <img 
            src="/1758793362119-group.png" 
            className="w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-700" 
            alt="Asset Preview" 
          />
        </div>

        {/* Floating Detail Tags */}
        <div className="absolute -right-8 top-10 bg-white dark:bg-black p-3 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 animate-bounce [animation-duration:5s]">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-[10px] font-bold uppercase tracking-tight">PhysX Ready</span>
            </div>
        </div>

        <div className="absolute -left-12 bottom-20 bg-white dark:bg-black p-3 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
                <Globe size={12} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Universal</span>
            </div>
        </div>
      </div>
    </div>
      </div>
</section>
     

      {/* --- 2. GRID TOOLBAR --- */}
      <div className="max-w-full mx-auto mt-10 flex justify-between items-end border-zinc-200 dark:border-zinc-900 ">
        <div className="">
          <h2 className="text-4xl font-black tracking-tight text-muted/90">Available Items</h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Showing {products.length} units</p>
        </div>
        <div className="flex gap-2">
            <button className="h-10 px-6 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Sort By: Newest
            </button>
        </div>
      </div>

      {/* --- 3. SLEEK PRODUCT GRID --- */}
      <main className="max-w-full mx-auto mt-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link href={`/categories/${displayName}/${item.name}`} passHref key={item.id} className="group relative flex flex-col">
              {/* Product Frame */}
              <div className="relative rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className=" h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="px-8 py-3 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95">
                        Download Now
                    </button>
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
            </Link>
          ))}
        </div>
      </main>
   </div>     
  );
};

export default CategoryPage;