import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} TheBestOffersYouCanFindOnTheWeb.shop - All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Affiliate Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
