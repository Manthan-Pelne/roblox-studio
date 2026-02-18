"use client"
import Link from 'next/link'
import { ArrowUpRight, Copy, Heart, Star, Zap } from 'lucide-react'
import Image from 'next/image' // Always use Next.js Image
import { useParams } from 'next/navigation';
import { p } from 'framer-motion/client';


const ComingSoonState = () => {
  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center p-10 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[3rem] bg-zinc-50/50 dark:bg-zinc-950/20 mt-4">
      
      {/* Animated Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
        <div className="relative h-20 w-20 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-xl">
          <Zap size={32} className="text-primary animate-bounce [animation-duration:3s]" fill="currentColor" />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
          Restocking Archive
        </div>
        
        <h3 className="text-3xl font-black tracking-tighter uppercase italic text-zinc-800 dark:text-zinc-200">
          New Drop <span className="text-primary">comming soon...</span>
        </h3>
        
        <p className="max-w-[280px] m-auto text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Our developers are finalizing the next batch of high-fidelity assets. Check back shortly for the update.
        </p>
      </div>

      {/* Decorative Progress bar */}
      <div className="mt-8 w-48 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-primary w-1/3 animate-[shimmer_2s_infinite] shadow-[0_0_10px_rgba(228,81,55,0.5)]" />
      </div>
    </div>
  );
};


const ProductCard = ({ prod, href }: any) => {

if (!prod || prod.length === 0) {
    return <ComingSoonState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {prod.map((item: any) => (
        <Link 
        key={item._id} // Required for React list rendering
        href={`/${href}/${item.category?.title?.toLowerCase()}/${item.slug}`}
        className="group flex flex-col h-full bg-white dark:bg-[#110e0c] rounded-[2rem] border border-black/5 dark:border-white/5 p-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(228,81,55,0.1)] hover:-translate-y-1"
        >
          {/* The Image Stage */}
          <div className="relative flex-shrink-0 flex items-center justify-center bg-[#F8F9FA] dark:bg-[#1a1614] rounded-[1.5rem] overflow-hidden h-[230px] w-full border border-black/[0.03] dark:border-white/[0.03]">
    
            {/* Top Badges */}
            <div className="absolute top-2 left-4 right-4 flex justify-between items-start z-10">
              <div className="h-9 w-9 bg-white dark:bg-zinc-950 rounded-2xl flex items-center justify-center shadow-xl">
                <ArrowUpRight size={18} />
              </div>
              <h3 className="h-7 shadow text-xs px-2 bg-white/90 dark:bg-black/50 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-center text-zinc-400 font-semibold transition-all">
                views : {item.viewcount}
              </h3>
            </div>

              <div className="absolute bottom-2 left-4 right-4 flex justify-between items-start z-10">
            <div></div>
             <h3 className="h-7 mb-2 font-black shadow text-primary/60 bg-secondary/10 text-xs px-2 dark:bg-black/50 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-center hover:text-[#E45137] transition-all">
                downloads : {item.downloadcount || "0"}
              </h3>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 transition-transform duration-700 ease-out group-hover:scale-110">
              <img
                src={`${process.env.NEXT_PUBLIC_R2_CDN_URL}/${item.image.key}`} // Handles object or string
                alt={item.name}
                className="w-48 object-contain drop-shadow-[0_15px_30px_rgb(214,255,231)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex justify-between items-center gap-5 w-full p-3 mt-2 rounded-3xl shadow border bg-[gray]/5">
            <div className="space-y-0.5 min-w-0 flex-1">
              <p className='text-xs font-black italic uppercase text-primary'>
                {item.category?.title}
              </p>
              <h4 className="font-bold truncate text-muted dark:text-zinc-100 tracking-tight leading-tight">
                {item.name}
              </h4>
            </div>

            <div className="flex flex-col">
              
              <div className="flex items-center text-center m-auto gap-1 bg-zinc-900 dark:bg-primary/20 hover:bg-black/80 dark:hover:bg-primary/10 transition-all duration-200 px-2.5 py-1 rounded-md shadow-md">
                <div className="h-6  flex items-center gap-2 justify-center rounded-md text-zinc-100 dark:text-white cursor-pointer">
                  <p className='text-sm'>copy</p>
                  <Copy size={16} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductCard