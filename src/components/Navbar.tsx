import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gradient">
              THEBESTOFFERS
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#offers" className="hover:text-brand-secondary transition-colors duration-200">Featured Deals</Link>
              <Link href="#about" className="hover:text-brand-secondary transition-colors duration-200">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
