import Link from 'next/link';

export const SearchResultCard = ({ card, onClick }: any) => (
  <Link 
    href={`/categories/${card.category?.title?.toLowerCase()}/${card.slug}`}
    onClick={onClick}
    className="flex items-center gap-3 p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
  >
    <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-lg shrink-0 overflow-hidden">
        {/* Add image here if available */}
        <img
          src={`${process.env.NEXT_PUBLIC_R2_CDN_URL}/${card.image.key}`} // Handles object or string
          alt={card.name}
          />
    </div>
    <div className="flex flex-col overflow-hidden">
      <span className="font-medium text-sm truncate dark:text-white">{card.name}</span>
      <span className="text-xs text-zinc-500 truncate">{card.category?.title || 'Asset'}</span>
    </div>
  </Link>
);