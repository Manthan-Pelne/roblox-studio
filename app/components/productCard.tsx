import Link from 'next/link'
import { ArrowUpRight, Copy, Heart } from 'lucide-react'
import Image from 'next/image' // Always use Next.js Image

const ProductCard = ({ prod }: any) => {
  // 1. Logic check: If 'prod' is the array from your MongoDB action
  if (!prod || prod.length === 0) return <p>No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {prod.map((item: any) => (
        <Link 
          key={item._id} // Required for React list rendering
          href={`/card/${item.slug}`} // Link to the dynamic details page
          className="group flex flex-col h-full bg-white dark:bg-[#110e0c] rounded-[2rem] border border-black/5 dark:border-white/5 p-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(228,81,55,0.1)] hover:-translate-y-1"
        >
          {/* The Image Stage */}
          <div className="relative flex-shrink-0 flex items-center justify-center bg-[#F8F9FA] dark:bg-[#1a1614] rounded-[1.5rem] overflow-hidden h-[230px] w-full border border-black/[0.03] dark:border-white/[0.03]">
            
            {/* Top Badges */}
            <div className="absolute top-2 left-4 right-4 flex justify-between items-start z-10">
              <div className="h-9 w-9 bg-white dark:bg-zinc-950 rounded-2xl flex items-center justify-center shadow-xl">
                <ArrowUpRight size={18} />
              </div>
              <button className="h-9 w-9 bg-white/90 dark:bg-black/50 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#E45137] transition-all">
                <Heart size={16} />
              </button>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 transition-transform duration-700 ease-out group-hover:scale-110">
              <img
                src={item.image?.url || item.image} // Handles object or string
                alt={item.name}
                className="w-48 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex justify-between items-center gap-3 w-full p-3 mt-2 rounded-3xl shadow border bg-[gray]/5">
            <div className="space-y-0.5 min-w-0 flex-1">
              <p className='text-xs font-black italic uppercase text-primary'>
                {item.category?.title || "Asset"}
              </p>
              <h4 className="font-bold truncate text-muted dark:text-zinc-100 tracking-tight leading-tight">
                {item.name}
              </h4>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-1 bg-zinc-900 dark:bg-zinc-100 hover:bg-black/80 dark:hover:bg-black/10 transition-all duration-200 px-2.5 py-1 rounded-lg shadow-sm">
                <div className="h-6 w-10 flex items-center justify-center rounded-md text-zinc-100 dark:text-zinc-500 cursor-pointer">
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