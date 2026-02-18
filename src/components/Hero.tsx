export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The World's <span className="text-gradient">Best Offers</span> <br />
          Delivered to You.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          We curate the most exclusive health (Nutra) and digital products on the web. 
          Professional affiliate selection with unbeatable value. 
          Welcome to your new favorite shopping destination.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#offers" className="px-8 py-4 bg-brand-primary rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/40">
            Browse Offers
          </a>
          <a href="#about" className="px-8 py-4 glass-morphism rounded-full font-bold hover:bg-white/5 transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
