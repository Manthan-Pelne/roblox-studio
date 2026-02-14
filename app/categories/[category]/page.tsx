"use client"
import React from 'react';
import { Download, Copy, ChevronRight, Globe, Zap, ShieldCheck, ArrowUpRight, Heart } from 'lucide-react';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
            {products.map((prod) => (
             <Link href={`/categories/${displayName}/${prod.name}`} key={prod.id} className="group flex flex-col h-full bg-white dark:bg-[#110e0c] rounded-[2rem] border border-black/5 dark:border-white/5 p-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(228,81,55,0.1)] hover:-translate-y-1">

                {/* The Image Stage - Normalizing small/big images */}
                <div className="relative flex-shrink-0 flex items-center justify-center bg-[#F8F9FA] dark:bg-[#1a1614] rounded-[1.5rem] overflow-hidden h-[230px] w-full border border-black/[0.03] dark:border-white/[0.03]">

                  {/* Top Badges (Stats) */}
                  <div className="absolute top-2 left-4 right-4 flex justify-between items-start z-10">
                    <div className=" h-9 w-9 bg-white  dark:bg-zinc-950 rounded-2xl flex items-center justify-center shadow-xl ">
                       <ArrowUpRight size={18} />
                     </div>

                    <button className="h-9 w-9 bg-white/90 dark:bg-black/50 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#E45137] transition-all">
                      <Heart size={16} />
                    </button>
                  </div>

                  {/* Product Image - Scaled to fit stage */}
                  <div className="relative w-full h-full flex items-center justify-center p-4 transition-transform duration-700 ease-out group-hover:scale-110">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className=" w-48 object-contain drop-shadow-[0_15px_30px_rgb(214,255,231)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex justify-between items-center gap-3 w-full p-3 mt-2 rounded-3xl shadow border  bg-[gray]/5">
                  {/* Wrapper for the name - min-w-0 is the secret ingredient */}
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <p className='text-xs font-black italic uppercase text-primary'>{prod.category}</p>
                    <h4 className="font-bold truncate text-muted dark:text-zinc-100 tracking-tight leading-tight">
                      {prod.name}
                    </h4>
                  </div>

                  {/* Button Section */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-1 bg-zinc-900 dark:bg-zinc-100 hover:bg-black/80 dark:hover:bg-black/10 transition-all duration-200 px-2.5 py-1 rounded-lg shadow-sm">
                      <button className="h-6 w-10 flex items-center justify-center rounded-md text-zinc-100 dark:text-zinc-500 cursor-pointer">
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </main>
   </div>     
  );
};

export default CategoryPage;