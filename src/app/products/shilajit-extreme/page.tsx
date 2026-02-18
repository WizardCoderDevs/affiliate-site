import CookiePopup from "@/components/CookiePopup";

export default function ShilajitExtremePage() {
  const offerUrl = "https://nplink.net/7syk9mu9";
  
  return (
    <main className="h-screen w-screen overflow-hidden bg-black relative">
      <CookiePopup affiliateUrl={offerUrl} />
      <iframe 
        src={offerUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Shilajit Extreme Offer"
      />
    </main>
  );
}
