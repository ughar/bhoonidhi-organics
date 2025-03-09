import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-700">Bhoonidhi Organics</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700">
              Home
            </Link>
            <Link href="/benefits" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-700">
              Benefits
            </Link>
            <Link href="/process" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-700">
              Our Process
            </Link>
            <Link href="/products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-700">
              Products
            </Link>
            <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 