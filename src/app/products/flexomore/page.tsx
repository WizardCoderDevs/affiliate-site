import CookiePopup from "@/components/CookiePopup";

export default function FlexomorePage() {
  const offerUrl = "https://nplink.net/ocet5t4g";

  return (
    <main className="h-screen w-screen overflow-hidden bg-black relative">
      <CookiePopup affiliateUrl={offerUrl} />
      <iframe 
        src={offerUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Flexomore Offer"
      />
    </main>
  );
}
