"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Copy, Download } from 'lucide-react';

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
          {product.map((item:any) => (
            <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="group relative bg-white dark:bg-zinc-900 border border-black/15 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[10px] font-bold border uppercase tracking-widest bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-muted text-sm dark:text-zinc-100 truncate">
                    {item.name}
                  </h3>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      title="Download Template"
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download size={14} />
                      Save
                    </button>
                    <button 
                      title="Copy ID"
                      className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
              </div>
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