"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowUpRight, Copy, Download, Heart } from 'lucide-react';
import Link from 'next/link';

// Destructure the product array from props
const ProductCarousel = ({ cards}:any) => {
console.log("card",cards)
  return (
    <div className="w-full max-w-full px-4 flex justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {/* Map through the products array here */}
          {cards.map((prod:any) => (
            <CarouselItem key={prod._id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <Link href={`/categories/${prod.category.slug}/${prod.name}`} key={prod.id} className="group flex flex-col h-full bg-white dark:bg-[#110e0c] rounded-[2rem] border border-black/5 dark:border-white/5 p-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(228,81,55,0.1)] hover:-translate-y-1">
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
                   src={`${prod.image.key}`} 
        alt={prod.name}
                      className=" w-48 object-contain drop-shadow-[0_15px_30px_rgb(214,255,231)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex justify-between items-center gap-3 w-full p-3 mt-2 rounded-3xl shadow border  bg-[gray]/5">
                  {/* Wrapper for the name - min-w-0 is the secret ingredient */}
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <p className='text-xs font-black italic uppercase text-primary'>{prod.category.slug}</p>
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