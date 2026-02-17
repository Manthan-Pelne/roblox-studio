
import { TextAnimate } from '@/components/ui/text-animate';
import ProductCarousel from './productCarousel';
import Link from 'next/link';
import { GetHomePageData } from '../actions/cardAction';
import ProductCard from './productCard';


const CategorySection = ({ title, count, cards }: any) => (
  <div className="w-full">
    <div className='mb-5  flex justify-between items-center px-4 py-1'>
      <div>
        <h2 className="text-2xl font-black tracking-tight text-muted/90">{title}</h2>
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          Showing {count} Products
        </p>
      </div>
      <Link href={`/categories/${title.toLowerCase()}`}>
        <button className="pt-3 pb-2.5 px-6 cursor-pointer rounded-full border border-zinc-400 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          view more
        </button>
      </Link>
    </div>
    <ProductCarousel cards={cards} />
  </div>
)


const HomePage = async({ searchParams }: { searchParams: Promise<{ page?: string }>}) => {

// Get the page number from the URL (defaults to 1)
const params = await searchParams;
  const page = parseInt(params.page || '1');
  
  // Fetch ALL the data needed for the landing page
  const data = await GetHomePageData(page);
 
  return (
<>
      <div className="relative w-full h-max mx-auto mt-2 overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 shadow-md dark:bg-zinc-900">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.09] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="relative z-10 text-center py-12 px-6 ">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-2 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
            The Industry Standard
          </span>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 dark:text-white text-muted">
            Roblox <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#11ac9a] to-[#01cc6d]">Studio.</span>
              <svg className="absolute bottom-0 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
           <TextAnimate animation="blurInUp" by="character" duration={4} once className="text-2xl md:text-4xl text-muted dark:text-zinc-200">
            Premium Assets for the Next Gen Creator
          </TextAnimate>

          {/* Description */}
          <p className="w-full max-w-2xl mx-auto mt-4 text-l font-medium text-muted-foreground dark:text-zinc-400  leading-relaxed">
            Access the largest library of professional-grade 
            <span className="text-primary dark:text-white font-bold"> shirts, pants, and 3D assets.</span> 
            Crafted for creators who demand high-fidelity designs.
          </p>
        </div>

      </div>


      {data.tshirt.length > 0 && (
        <CategorySection 
          title="T-shirts" 
          cards={data.tshirt} 
          count={data.tshirt.length} 
        />
      )}

      {data.shirt.length > 0 && (
        <CategorySection 
          title="Shirts" 
          cards={data.shirt} 
          count={data.shirt.length} 
        />
      )}

         {data.pant.length > 0 && (
        <CategorySection 
          title="Pants" 
          cards={data.pant} 
          count={data.pant.length} 
        />
      )}



      <div className='mt-20'>
        <h2 className="text-4xl text-center mb-5 font-black tracking-tight text-muted/90">Most Downloads</h2>
       <ProductCard href="categories" prod={data.mostdownloads}/>
      </div>
</>

  );
};

export default HomePage;