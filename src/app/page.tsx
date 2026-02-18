import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "EcoPro Nutrient Boost",
    category: "Nutra & Health",
    price: "49.99",
    description: "Advanced natural supplement designed to boost your daily energy levels and support metabolic health with organic ingredients.",
    label: "Best Seller"
  },
  {
    title: "Digital Freedom System",
    category: "Digital Products",
    price: "197.00",
    description: "The complete blueprint for scaling your online business from scratch. Inclusive video training and exclusive community access.",
    label: "New"
  },
  {
    title: "Pure Glow Skin Vitality",
    category: "Nutra & Health",
    price: "34.50",
    description: "Premium collagen formula for radiant skin, strong hair, and healthy joints. Clinical grade results in just 30 days.",
    label: "Limited Deal"
  },
  {
    title: "AI Automation Secrets",
    category: "Digital Products",
    price: "89.00",
    description: "Learn how to automate 80% of your workflow using modern AI tools. Practical guides for the modern entrepreneur.",
    label: "Essential"
  }
];

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
            {products.map((product, idx) => (
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

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} TheBestOffersYouCanFindOnTheWeb.shop - All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Affiliate Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
