import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AffiliateDisclaimer() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl border-brand-accent/20 border">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Affiliate Disclaimer</h1>
          <div className="space-y-6 text-slate-400">
            <div className="bg-brand-accent/5 p-6 rounded-2xl border border-brand-accent/10 mb-8">
              <p className="text-white font-medium italic">"In compliance with the FTC guidelines, please assume the following about links and posts on this site: Most of the links on TheBestOffersYouCanFindOnTheWeb.shop are affiliate links of which we receive a small commission from sales of certain items."</p>
            </div>
            <p>Our website promotes high-quality health (Nutra) and digital products. We personally select the offers listed here to ensure they meet our quality standards.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">What is an Affiliate Link?</h2>
            <p>An affiliate link is a special URL that contains the affiliate's ID or username. When you click on one of these links and make a purchase, we receive a small commission from the merchant at no extra cost to you.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">Our Commitment</h2>
            <p>Our primary goal is to provide value to our customers by finding the best deals across the web. The commissions we earn help us maintain this site and continue our research into top-tier products.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
