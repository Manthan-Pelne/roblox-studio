"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowUpRight, Copy, Download, Heart } from 'lucide-react';
import Link from 'next/link';

// Destructure the product array from props
const ProductCarousel = ({ product}:any) => {
  return (
    <div className="w-full px-4 flex justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {/* Map through the products array here */}
          {product.map((prod:any) => (
            <CarouselItem key={prod.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Link href={`/categories/${prod.category.toLowerCase()}/${prod.name}`} className="group relative w-full max-w-sm"> 
              {/* Main Card */}
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
            </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="-left-5" />
            <CarouselNext className="-right-5" />
        </div>
      </Carousel>
    </div>
  )
}

export default ProductCarousel