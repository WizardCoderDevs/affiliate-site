import CookiePopup from "@/components/CookiePopup";

export default function FolicerinPage() {
  const offerUrl = "https://nplink.net/ecz4hizp";

  return (
    <main className="h-screen w-screen overflow-hidden bg-black relative">
      <CookiePopup affiliateUrl={offerUrl} />
      <iframe 
        src={offerUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Folicerin Offer"
      />
    </main>
  );
}
