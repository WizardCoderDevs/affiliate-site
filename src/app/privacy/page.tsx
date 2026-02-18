import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
          <div className="space-y-6 text-slate-400">
            <p>Your privacy is important to us. It is the policy of TheBestOffersYouCanFindOnTheWeb.shop to respect your privacy regarding any information we may collect from you across our website.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">1. Information we collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">2. Use of Information</h2>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">3. Cookies</h2>
            <p>We use cookies to help improve your experience of our website. These cookies are used to track how you use the site and to target advertising to you.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
