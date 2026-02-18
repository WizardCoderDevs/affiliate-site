import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

interface Product {
  title: string;
  category: string;
  description: string;
  label?: string;
  href?: string;
  imageUrl?: string;
}

const typedProducts = products as Product[];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Offers Section */}
      <section id="offers" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Prime <span className="text-gradient">Featured Offers</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each product in our catalog is hand-picked to ensure maximum quality and unbeatable results for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {typedProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Affiliate Disclosure */}
      <section id="about" className="py-24 glass-morphism border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Transparency First</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            We are a dedicated affiliate platform focused on connecting you with the highest quality products on the internet. 
            <strong> TheBestOffersYouCanFindOnTheWeb.shop</strong> earns a small commission on purchases through our links, 
            allowing us to continue researching and bringing you truly valuable deals without any extra cost to you.
          </p>
          <div className="flex justify-center gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Hand Picked</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">24/7</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Support Access</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">Fast</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Digital Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
