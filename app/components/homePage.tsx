import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full mx-auto p-4 '>
      <div className="relative w-full mt-4 mx-auto  shadow-md bg-white border border-black/10  dark:bg-black dark:text-white overflow-hidden rounded-2xl">
    <div className=" text-center py-8 2xl:py-10 relative shadow-md p-5">
        <h1 className="text-5xl flex flex-col md:flex-row justify-center items-center gap-[10px] drop-shadow-2xl font-extrabold mb-6"> Roblox <span
                className="bg-primary text-white pt-1.5 pb-3 px-10 rounded-full">Studio.</span></h1>
        <h2 className="font-bold text-xl md:text-3xl text-black/80 dark:text-white/90 mb-4">Biggest Roblox Template Library</h2>
        <h3 className=" w-full font-bold max-w-3xl mx-auto text-black/40 dark:text-white/70 mb-7">
            Download the biggest collection of free Roblox templates, including shirts, pants, and t-shirts. Explore
            high-quality designs, customize your avatar, and create unique Roblox outfits with the #1 template
            downloader.
        </h3>
        
        <a href="/">
            <div
                className="p-1 rounded-full shadow-xl w-max m-auto text-xl font-bold bg-primary text-white">
                <div className="bg-white dark:bg-black text-black/90 dark:text-white/90 rounded-full px-4 py-1.5">Get Started For Free</div>
            </div>
        </a>

    </div>
</div>
    </div>
  )
}

export default HomePage