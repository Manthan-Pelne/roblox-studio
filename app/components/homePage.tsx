
import { TextAnimate } from '@/components/ui/text-animate';

const HomePage = () => {
  return (
      <div className="relative w-full h-max mt-4 mx-auto overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 shadow-md bg-white dark:bg-zinc-900">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.09] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="relative z-10 text-center py-14 px-6 ">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
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
          <p className="w-full max-w-2xl mx-auto mt-4 text-l font-medium text-muted-foreground dark:text-zinc-400 mb-10 leading-relaxed">
            Access the largest library of professional-grade 
            <span className="text-primary dark:text-white font-bold"> shirts, pants, and 3D assets.</span> 
            Crafted for creators who demand high-fidelity designs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-md">
              Browse Collection
            </button>
            <button className="px-8 py-4 bg-zinc-100 shadow-md dark:bg-zinc-800 text-muted dark:text-white font-bold rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              Sell Your Designs
            </button>
          </div>

        </div>
      </div>
  );
};

export default HomePage;