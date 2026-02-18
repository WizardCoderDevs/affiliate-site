"use client";

interface CookiePopupProps {
  affiliateUrl: string;
}

export default function CookiePopup({ affiliateUrl }: CookiePopupProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent animate-in fade-in duration-500">
      <div className="bg-slate-900 max-w-md w-full p-8 rounded-3xl border border-white/10 shadow-2xl transform animate-in zoom-in-95 duration-300">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🍪</span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Cookie Consent</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            We use cookies to improve your experience and show you the most relevant offers. By continuing to browse, you agree to our use of cookies.
          </p>
          
          <div className="flex flex-col gap-3">
            <a 
              href={affiliateUrl}
              className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all text-center"
            >
              Accept All Cookies
            </a>
            <a 
              href={affiliateUrl}
              className="w-full py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-all border border-white/10 text-center"
            >
              Reject Non-Essential
            </a>
          </div>
          
          <p className="mt-6 text-xs text-slate-500">
            Read our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> for more details.
          </p>
        </div>
      </div>
    </div>
  );
}
