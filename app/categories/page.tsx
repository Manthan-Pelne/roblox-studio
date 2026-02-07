import React from 'react';
import { 
  Shirt, 
  Layers, 
  Gamepad2, 
  Palette, 
  Sparkles, 
  Sword, 
  Box, 
  User, 
  Zap, 
  Crown 
} from 'lucide-react';

const CategoriesPage = () => {
  const categories = [
    { name: "Classic Shirts", count: "12k+", icon: <Shirt />, color: "bg-blue-500" },
    { name: "Tactical Pants", count: "8k+", icon: <Layers />, color: "bg-emerald-500" },
    { name: "3D Accessories", count: "5k+", icon: <Box />, color: "bg-purple-500" },
    { name: "Game Passes", count: "2k+", icon: <Gamepad2 />, color: "bg-orange-500" },
    { name: "UGC Limiteds", count: "1k+", icon: <Sparkles />, color: "bg-pink-500" },
    { name: "Weapon Skins", count: "3k+", icon: <Sword />, color: "bg-red-500" },
    { name: "Avatar Bundles", count: "4k+", icon: <User />, color: "bg-indigo-500" },
    { name: "VFX & GFX", count: "900+", icon: <Zap />, color: "bg-yellow-500" },
    { name: "Premium UI Kits", count: "150+", icon: <Palette />, color: "bg-cyan-500" },
    { name: "VIP Templates", count: "300+", icon: <Crown />, color: "bg-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] border rounded-3xl dark:bg-zinc-950 p-6 md:p-8 mt-3">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full rounded-3xl overflow-hidden bg-linear-to-tr from-primary to-secondary py-16 px-8 mb-8 shadow-2xl">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Browse by <span className="">Category.</span>
          </h1>
          <p className="text-zinc-300 text-lg font-medium max-w-xl">
            Everything you need to build the next front-page experience. 
            From high-fidelity textures to custom 3D mesh kits.
          </p>
        </div>
      </section>

      {/* --- Categories Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="group relative cursor-pointer"
          >
            <div className="h-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 p-6 rounded-2xl transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary/50">
              
              {/* Icon Wrap */}
              <div className={`w-12 h-12 ${cat.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-inherit/20`}>
                {React.cloneElement(cat.icon, { size: 24 })}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {cat.count} Assets Available
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-primary font-bold text-sm opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                Explore Library →
              </div>

              {/* Decorative Background ID */}
              <span className="absolute top-4 right-6 text-4xl font-black text-black/[0.03] dark:text-white/[0.03] pointer-events-none uppercase">
                {cat.name.split(' ')[0]}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategoriesPage;