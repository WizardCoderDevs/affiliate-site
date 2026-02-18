import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
          <div className="space-y-6 text-slate-400">
            <p>By accessing the website at TheBestOffersYouCanFindOnTheWeb.shop, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">1. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">2. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
