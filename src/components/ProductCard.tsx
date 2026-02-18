interface ProductProps {
  title: string;
  category: string;
  price: string;
  description: string;
  label?: string;
}

export default function ProductCard({ title, category, price, description, label }: ProductProps) {
  return (
    <div className="glass-morphism rounded-2xl p-6 hover:translate-y-[-8px] transition-all duration-300 flex flex-col h-full group">
      <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
        {label && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-brand-accent text-slate-950 text-xs font-bold rounded-full z-10 capitalize">
            {label}
          </span>
        )}
        {/* Placeholder for images while tool is unavailable */}
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
          <span className="text-slate-700 text-4xl">💎</span>
        </div>
      </div>
      
      <div className="flex-grow">
        <span className="text-brand-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">{category}</span>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-2xl font-bold">${price}</span>
        <button className="px-5 py-2 bg-white text-slate-950 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
          Get Offer
        </button>
      </div>
    </div>
  );
}
