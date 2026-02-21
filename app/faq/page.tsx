"use client"
import React, { useState } from 'react';
import { HelpCircle, ChevronRight, BookOpen, Layers, Lock, Zap, Search } from 'lucide-react';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('General');

  const categories = [
    { id: 'General', icon: <HelpCircle size={18} />, label: 'General Logic' },
    { id: 'Technical', icon: <Layers size={18} />, label: 'Technical Specs' },
    { id: 'Security', icon: <Lock size={18} />, label: 'Safety Protocol' },
    { id: 'Usage', icon: <Zap size={18} />, label: 'Usage Rights' },
  ];

  const faqData = {
  General: [
    { q: "What is the Multi-Category Archive?", a: "An architectural initiative designed to standardize Roblox Studio workflows by providing high-fidelity, optimized template structures." },
    { q: "How often are new blueprints indexed?", a: "Our repository updates every 48-72 hours, pending technical validation and optimization checks." },
    { q: "Who manages the archival updates?", a: "A collective of technical artists and Luau engineers dedicated to maintaining the 'Gold Standard' for Roblox environmental design." },
    { q: "Can I request a specific category?", a: "Affirmative. Use the Contact Interface to submit a 'Category Request Packet'. High-demand structures are prioritized for the next sprint." },
    { q: "Is this affiliated with Roblox Corporation?", a: "Negative. This is a third-party architectural repository focused on advancing the developer ecosystem independently." },
    { q: "How are assets categorized?", a: "Assets are indexed via 'Environmental Tier' and 'Technical Complexity' to help developers find blueprints that match their performance budget." },
    { q: "Are legacy templates kept in the archive?", a: "We maintain a 'Versioned Legacy' section for older builds, though we recommend 'Current Gen' blueprints for optimal performance." },
    { q: "What does 'Multi-Category' imply?", a: "Our archive spans across Industrial, Cybernetic, Brutalist, and Naturalistic structural logic." },
    { q: "Is there a subscription fee?", a: "Access to the primary archive is open-protocol. We believe in democratizing high-end development resources." },
    { q: "Can I submit my own blueprints?", a: "Yes, via the 'Contributor Gateway'. All submissions must pass our triple-stage optimization audit." },
    { q: "Where is the data hosted?", a: "Metadata is stored on decentralized nodes to ensure the archive remains persistent and globally accessible." },
    { q: "Do you provide scripting tutorials?", a: "We provide technical documentation for the logic scripts included in templates, but we are not a general tutoring platform." }
  ],
  Technical: [
    { q: "Are the templates PBR ready?", a: "Yes. Every asset utilizes Physically Based Rendering (Albedo, Normal, Roughness, Metalness) for 1:1 lighting accuracy." },
    { q: "What is the average part count?", a: "We prioritize 'Instancing' over part-heavy builds. Most templates maintain a low-impact footprint while maximizing visual depth." },
    { q: "Do blueprints support 'Future' lighting?", a: "Affirmative. All templates are tested specifically under the 'Future' Lighting Technology for realistic shadow casting and specular highlights." },
    { q: "Are meshes optimized for LODs?", a: "Every mesh asset includes Level of Detail (LOD) settings to ensure high FPS even in large-scale environmental renders." },
    { q: "Is Luau used in the template logic?", a: "Yes, all included scripts are written in strict Luau, utilizing task.wait() and modern event handling for maximum efficiency." },
    { q: "Do you use StreamingEnabled settings?", a: "Blueprints are designed to be StreamingEnabled-compatible, with proper Part/Mesh grouping to prevent visual popping." },
    { q: "Are the textures 1K or 2K?", a: "We provide 1024x1024 textures as the standard to balance memory usage with high-fidelity detail." },
    { q: "How do you handle MeshPart collision?", a: "We default to 'Box' or 'Hull' for non-interactive meshes to save on physics calculations, and 'Precise' only where necessary." },
    { q: "Are there pre-built hitboxes?", a: "Yes, for interactive assets, invisible hitbox geometry is pre-configured to ensure clean player movement." },
    { q: "What is the scale standard?", a: "All blueprints follow the 'Robloxian Standard' scale (1 stud = 0.28 meters) to ensure consistent character interaction." },
    { q: "Do you support Parallel Luau?", a: "For logic-heavy templates (like NPCs or complex lighting systems), we implement Parallel Luau protocols where applicable." },
    { q: "Are templates compatible with Team Create?", a: "Affirmative. All structures are grouped and locked in a manner that prevents accidental deletion during collaborative sessions." }
  ],
  Security: [
    { q: "Are there hidden scripts or backdoors?", a: "Negative. Every .rbxl and .rbxm file undergoes a three-stage manual and automated audit for malicious strings." },
    { q: "Do I need to give credit?", a: "While not mandatory, indexing our archive in your project's credits helps us expand the repository for the community." },
    { q: "Is my personal data tracked?", a: "We do not track individual user data. Our analytics are strictly limited to 'Download Frequency' of specific blueprints." },
    { q: "Are the downloads direct?", a: "Yes. We avoid suspicious third-party redirectors. All links are direct-access to ensure packet integrity." },
    { q: "How do you prevent 'Botting'?", a: "We implement rate-limiting on our API nodes to prevent mass-scraping and ensure stable access for human developers." },
    { q: "Can I mirror the archive?", a: "Mirroring is allowed only for internal studio use. Public redistribution of the archive database requires a 'Mirror Protocol' agreement." },
    { q: "Are the scripts obfuscated?", a: "Never. We believe in transparency. All Luau source code is fully readable and documented for your audit." },
    { q: "What happens if a vulnerability is found?", a: "The asset is immediately 'Quarantined', patched within 24 hours, and a notification is logged in the System Status." },
    { q: "Are external APIs used in scripts?", a: "Unless explicitly stated (e.g., for a Webhook template), all logic remains internal to the Roblox environment." },
    { q: "Is the site SSL encrypted?", a: "Affirmative. All data transit between your machine and our nodes is protected via high-level SSL encryption." },
    { q: "Do you offer 'Private' templates?", a: "Currently, the archive is 100% public. Private repository hosting is an upcoming feature for 'Tier 2' users." },
    { q: "How do I report a security concern?", a: "Use the 'Emergency Protocol' toggle in the Contact form for immediate prioritization by our security leads." }
  ],
  Usage: [
    { q: "Can I use these for commercial games?", a: "Affirmative. All templates are released under a Creative Commons Zero (CC0) license for unrestricted commercial deployment." },
    { q: "Can I resell individual assets?", a: "Negative. While you can use them in a game you sell, you cannot resell the raw template files as your own work." },
    { q: "Are these templates 'Plug and Play'?", a: "Yes. Most are designed to be dragged into a Workspace with zero additional configuration required." },
    { q: "Can I modify the blueprints?", a: "We encourage it. Our blueprints are designed as 'Foundational Logic' meant to be built upon and customized." },
    { q: "Is there a limit on downloads?", a: "Current-tier users have unlimited access to the archive database without bandwidth throttling." },
    { q: "Can I use these in non-Roblox engines?", a: "Our license allows it, but since files are in .rbxl format, you would need to export them to .FBX or .OBJ manually." },
    { q: "What is the policy on 'Asset Flips'?", a: "While we provide the tools, we encourage developers to add unique value. Pure asset flipping is technically allowed but discouraged." },
    { q: "Do you offer branding removal?", a: "Our templates are unbranded. There are no watermarks or hidden UI credits within the 3D space." },
    { q: "Can I use these for educational videos?", a: "Yes. Many creators use our archive for 'Speedbuild' or 'Scripting' tutorials. We just ask for a link-back." },
    { q: "How do I update an old template?", a: "Re-download the file from its original index ID to ensure you have the latest optimization patches." },
    { q: "Are there regional restrictions?", a: "Negative. The archive is accessible globally, following international open-source distribution standards." },
    { q: "Can I use these for commissions?", a: "Affirmative. You may use our assets as part of a paid commission for a client." }
  ]
  }

  return (
    <div className="min-h-screen bg-zinc-50 rounded-3xl dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-20 pb-20 px-6 font-sans">
      
      {/* 1. ARCHITECTURAL HEADER */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/20 border border-primary/10 rounded-full blur-3xl" />
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Central Knowledge Base</p>
         <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-8">
            Frequent <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-zinc-800 dark:from-zinc-100 dark:to-zinc-500">Queries.</span>
         </h1>
         
         {/* Sleek Search Bar for FAQ */}
         <div className="relative max-w-xl mx-auto group">
           <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
    Experience the next generation of <span className="text-black dark:text-white font-bold italic">Roblox development</span>. 
    Our assets are engineered for high-concurrency environments, featuring 
    <span className="text-black dark:text-white"> pixel-perfect textures</span> and 
    modular Luau integration. 
  </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 2. SIDE CATEGORY NAV */}
        <aside className="lg:col-span-3 space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 mb-4">Categories</p>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full flex cursor-pointer items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold uppercase text-xs tracking-widest ${
                activeTab === cat.id 
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl scale-105' 
                : 'hover:bg-zinc-200 dark:hover:bg-zinc-800 opacity-60'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </aside>

        {/* 3. CONTENT AREA */}
        <main className="lg:col-span-9 space-y-6">

          <div className="grid gap-4">
            {faqData[activeTab].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300">
                <summary className="list-none cursor-pointer p-8 flex justify-between items-center group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 transition-colors">
                  <h3 className="text-lg font-black uppercase italic tracking-tight pr-4">
                    {faq.q}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-open:rotate-90 transition-transform duration-300">
                    <ChevronRight size={20} className="text-primary" />
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-2">
                  <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-800 mb-6" />
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CATCHY FOOTER FIGURE */}
          <div className="mt-12 p-8 rounded-[1.7rem] bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-2xl font-black uppercase italic leading-none">Still confused?</h4>
              <p className="text-sm font-bold opacity-70">Initiate a direct communication protocol with our architects.</p>
            </div>
            <a href="/contact" className="relative z-10 bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
              Contact Support
            </a>
            <HelpCircle size={150} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
          </div>
        </main>
      </div>

      {/* FOOTER METADATA */}
      <footer className="mt-20 text-center opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em]">End of Documentation // User_Ref_882</p>
      </footer>
    </div>
  );
};

export default FAQPage;