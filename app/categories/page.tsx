import { ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

const CategoriesPage = () => {

  const allCategories = [
    "Melee", "Accessories", "Back", "Body Part", "Buildings", "Clothing",
    "Explosive", "Face", "Shirts", "Pants", "Front", "Gear", "Hair",
    "Hats", "Heads", "Musical", "Navigation", "Neck", "Power Up",
    "Ranged", "Shoulder", "Social", "T-Shirts", "Transport", "Waist"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] border rounded-3xl dark:bg-zinc-950 p-6 md:p-7 mt-3">

      {/* --- Hero Section --- */}
      <section className="relative w-full rounded-3xl overflow-hidden bg-linear-to-tr from-primary to-secondary py-20 px-10 mb-8 shadow-lg">

        <div
          className="absolute top-10 left-10 w-42 h-36 bg-white/10 blur-sm rotate-12"
          style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        ></div>

        <div
          className="absolute top-20 right-30 w-48 h-42 rotate-45 bg-white/10 backdrop-blur-md border border-white/10"
          style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        >
        </div>

        <div className='w-1/4 left-1/3 border-2 absolute bottom-13 opacity-20'></div>
        <div className='w-1/4 left-1/4 border-2 absolute bottom-10 opacity-20'></div>
        <div className='w-1/4 left-1/5 border-2 absolute bottom-7 opacity-20'></div>

        {/* --- CONTENT --- */}


        <div className="relative z-10 max-w-3xl">
          
          <h1 className="relative text-4xl md:text-6xl font-black mb-2 text-white tracking-tighter uppercase italic leading-none">
            Browse by Categories
          </h1>

          <p className="text-zinc-300 text-lg leading-6 font-medium max-w-xl">
            Everything you need to build the next front-page experience.
            From high-fidelity textures to custom 3D mesh kits.
          </p>
          
        </div>

      </section>


      {/* --- Categories Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {allCategories.map((cat, index) => (
          <div
            key={index}
            className="group relative cursor-pointer"
          >
            <Link href={`/categories/${cat.toLowerCase()}`} passHref>
            <div className="relative h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-md  transition-all duration-500 group group-hover:shadow-xl overflow-hidden">

              {/* 1. Subtle Grid Background (Visible only on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.1] dark:group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>

              {/* 2. Angular "Corner Figure" */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                {/* Main Corner Notch */}
                <div className="absolute top-0 right-0 w-full h-full bg-zinc-100 dark:bg-zinc-900 rounded-bl-[4rem] transition-transform duration-500 group-hover:scale-110"></div>
                {/* Accent Line */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40 group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* 3. Decorative Serial Number (Unique touch) */}
              <div className="absolute bottom-2 right-3 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-mono text-zinc-400">REF-00{index + 1}</span>
                <div className="w-12 h-[2px] bg-zinc-200 dark:bg-zinc-800 mt-">
                  <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Category Tag */}
                <div className="inline-block px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-4 tracking-tighter uppercase group-hover:bg-primary group-hover:text-white transition-colors">
                  Asset Class
                </div>

                {/* Text Info */}
                <h3 className="text-2xl font-black text-muted/80 dark:text-zinc-100 mb-2 tracking-tight">
                  {cat}
                </h3>
                <p className="text-sm font-medium text-muted-foreground/80 dark:text-zinc-400 leading-tight">
                  Explore the latest <br /> collection of 100+ items.
                </p>

                {/* Simple Interactive Bottom */}
                <div className="mt-6 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border border-zinc-400 dark:border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="text-xs group-hover:text-primary"><ArrowBigRight className='w-4'/></span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    Enter Category
                  </span>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategoriesPage;