"use client"
import React, { useState } from 'react';
import { ChevronLeft, Box, Zap, ShieldCheck, Copy, Check, Download, Heart, ArrowUpRight } from 'lucide-react';
import ProductCard from '@/app/components/productCard';

const ProductDetailsPage = ({ initialProduct, relatedProducts }: any) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Use the CDN URL for the images
  const getImgUrl = (path: string) => `${process.env.NEXT_PUBLIC_R2_CDN_URL}/${path}`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

   //console.log("initil",relatedProducts)

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505] p-4 md:p-7  rounded-3xl border">
      <main className="mx-auto space-y-8">
        
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image Side */}
            <div className="flex-1 p-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
              <h2 className="text-5xl md:text-[6vw] font-black uppercase whitespace-nowrap">
                {initialProduct.name}
              </h2>
            </div>
              <img 
                src={getImgUrl(initialProduct.image.key)} 
                alt={initialProduct.name}
                className="relative z-10 w-full max-w-[300px] object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Info Side */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                  <Zap size={12} fill="currentColor" /> Premium Template
                </div>
                <h1 className="text-5xl xl:text-6xl font-black tracking-tighter uppercase italic leading-[0.85]">
                  {initialProduct.name}<br />
                  <span className="text-zinc-300 dark:text-zinc-700">Studio.</span>
                </h1>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {initialProduct.category?.title || "Asset"}
                </span>
                <span className="text-[10px] font-black text-green-500 uppercase flex items-center gap-1">
                  <ShieldCheck size={12} /> Optimized
                </span>
              </div>

              {/* Copy ID & Download */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-1 items-center gap-4 p-2 pl-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full">
                  <p className="flex-1 text-sm font-bold tracking-widest uppercase">
                    <span className="text-primary/50 mr-4 font-black">ID</span>
                    <span className="font-mono">{initialProduct.code || "N/A"}</span>
                  </p>
                  <button onClick={() => handleCopy(initialProduct.code)} className="h-12 w-12 flex items-center justify-center bg-white dark:bg-zinc-900 border rounded-xl">
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
                
                <button className="h-16 px-10 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest">
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- RELATED PRODUCTS --- */}

        <div className='mt-12 flex items-center justify-between '>
                  <h2 className="text-[20px] font-black tracking-[0.5em] opacity-30 uppercase ">Related products</h2>
        </div>
        
            <ProductCard href="categories" prod={relatedProducts}/>
          
        
      </main>
    </div>
  );
};

export default ProductDetailsPage;