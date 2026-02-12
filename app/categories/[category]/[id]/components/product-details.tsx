"use client"
import React, { useState } from 'react';
import { ChevronLeft, Share2, Download, Eye, Copy, Check, ArrowUpRight, Box, ShieldCheck, Zap, Heart } from 'lucide-react';

const ProductDetails = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Your Dummy Data
  const products = [
    { id: 1, name: "Cyberpunk Vest", category: "Shirts", image: "/1758785091458-TRASHER.png", code: "VEST-2026", views: "1.2k", downloads: "450" },
    { id: 2, name: "Y2K Baggies", category: "Pants", image: "/1758793362119-group.png", code: "Y2K-PNT", views: "890", downloads: "210" },
    { id: 3, name: "Anime Katana", category: "Accessory", image: "/1758785091458-TRASHER.png", code: "KAT-99", views: "2.4k", downloads: "1.1k" },
    { id: 4, name: "Streetwear Hoodie", category: "Shirts", image: "/1758793362119-group.png", code: "HD-STRT", views: "1.5k", downloads: "600" },
    { id: 5, name: "Tactical Cargo", category: "Pants", image: "/1758785091458-TRASHER.png", code: "TRG-TC", views: "700", downloads: "150" },
    { id: 6, name: "Gothic Corset", category: "Shirts", image: "/1758793362119-group.png", code: "GTH-CRT", views: "2.1k", downloads: "900" },
    { id: 7, name: "Cyberpunk Vest", category: "Shirts", image: "/1758785091458-TRASHER.png", code: "VEST-V2", views: "1.1k", downloads: "400" },
    { id: 8, name: "Y2K Baggies", category: "Pants", image: "/1758793362119-group.png", code: "Y2K-XL", views: "650", downloads: "120" },
  ];

  // Using the first product as the "Main" display for this page
  const mainProduct = products[0];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Download Started");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505] p-4 md:p-7 mt-3 rounded-3xl border transition-colors duration-500">
      <main className=" mx-auto space-y-8">
        

        {/* --- 2. HERO PRODUCT SECTION --- */}
        <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg">
            
            <nav className="flex justify-between items-center max-w-5xl mx-auto my-4">
          <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-primary transition-all">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Store
          </button>
          <div className="flex items-center gap-4 text-zinc-400">
             <span className="text-[9px] font-bold uppercase tracking-widest border-r pr-4 border-zinc-200 dark:border-zinc-800">Verified Asset</span>
             <Box size={16} />
          </div>
           </nav>

          <div className="flex flex-col lg:flex-row items-stretch">  
            {/* LARGE IMAGE PREVIEW */}
            <div className="flex-1 p-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden">
               {/* Watermark */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                  <h2 className="text-[10vw] font-black uppercase">STUDIO</h2>
               </div>
               
               <div className="relative group w-full aspect-square max-w-[300px]">
                  <img 
                    src={mainProduct.image} 
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
                    alt={mainProduct.name} 
                  />
               </div>
            </div>


            {/* PRODUCT INFO */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                   <Zap size={12} fill="currentColor" /> Premium Template
                </div>
                <h1 className="text-5xl font-black tracking-tighter uppercase italic leading-[0.85]">
                  {mainProduct.name}<br />
                  <span className="text-zinc-300 dark:text-zinc-700">Studio.</span>
                </h1>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {mainProduct.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-300"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">PBR Textured</span>
              </div>

              {/* CODE INTERACTION */}
              <div className="flex items-center gap-4 p-2 pl-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl mb-3 group">
                <p className="flex-1 text-sm font-bold tracking-widest uppercase">
                  <span className="text-primary/50 mr-4 font-black">ID</span>
                  <span className="font-mono text-zinc-600 dark:text-zinc-300">{mainProduct.code}</span>
                </p>
                <button 
                  onClick={() => handleCopy(mainProduct.code)}
                  className="h-12 w-12 flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:text-primary transition-all active:scale-90"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-[2] h-16 bg-primary text-white rounded-[1.25rem] font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <Download size={18} />
                  {isDownloading ? 'Downloading...' : 'Download Asset'}
                </button>
                <button className="flex-1 h-16 border border-zinc-200 dark:border-zinc-800 rounded-[1.25rem] flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                  <Share2 size={20} />
                </button>
              </div>

              {/* FOOTER STATS */}
              <div className="flex items-center gap-10 mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-8">
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Views</span>
                    <span className="text-lg font-black italic">{mainProduct.views}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Saved</span>
                    <span className="text-lg font-black italic">{mainProduct.downloads}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Status</span>
                    <span className="text-[10px] font-black text-green-500 uppercase flex items-center gap-1">
                       <ShieldCheck size={12} /> Optimized
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. RELATED PRODUCTS GRID (4 COLS) --- */}
        <section className="space-y-10 pb-20">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400">Discover More Assets</h2>
            <div className="h-[1px] flex-1 mx-10 bg-zinc-200 dark:bg-zinc-800" />
            <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
            {products.map((prod) => (
              <div key={prod.id} className="group cursor-pointer">
               <div className="relative aspect-[4/5] bg-[#F8F9FA] dark:bg-[#0C0C0E] border border-zinc-200 dark:border-zinc-800/50 rounded-[2rem] overflow-hidden transition-all duration-500 hover:ring-1 hover:ring-primary/20">
                
                {/* Top Bar: Rarity & Stats */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                   <div className=" h-9 w-9 bg-white dark:bg-zinc-950 rounded-2xl flex items-center justify-center shadow-xl ">
                        <ArrowUpRight size={18} />
                     </div>
                  
                  <div className="flex gap-2">
                    <div className="h-9 w-9 bg-secondary/30 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/30 rounded-lg flex items-center justify-center text-zinc-500 group-hover:text-primary transition-colors">
                      <Heart size={16} className='' />
                    </div>
                  </div>
                </div>

                {/* Product Image Stage */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {/* Subtle Background Glow */}
                 
                  
                  <img 
                    src={prod.image} 
                    className="relative w-full h-full object-contain  drop-shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out" 
                  />
                </div>

                {/* Bottom Bento Box Content */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border dark:border-zinc-800/40 rounded-[1.5rem] p-4 shadow-xl">
                    
                    {/* Title & Price Row */}
                   <div className="flex justify-between items-center gap-3 w-full">
                      {/* Wrapper for the name - min-w-0 is the secret ingredient */}
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <h4 className="font-bold truncate text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                          {prod.name}
                        </h4>
                      </div>

                      {/* Button Section */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1 bg-zinc-900 dark:bg-zinc-100 px-2.5 py-1 rounded-lg shadow-sm">
                          <button className="h-6 w-10 flex items-center justify-center rounded-md text-zinc-100 dark:text-zinc-500 cursor-pointer hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
                            <Copy size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;