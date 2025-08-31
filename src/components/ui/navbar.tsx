'use client';
import Link from 'next/link';
import { ChevronDown, Menu as MenuIcon, X as CrossIcon } from 'lucide-react';
import Image from 'next/image';

const menu = [
  { title: 'About Us', href: '/about-us' },
  {
    title: 'Services',
    href: '/services',
    submenu: [
      { title: 'Salesforce Consulting', href: '/services/salesforce' },
      { title: 'Resource Augmentation', href: '/services/resource-augmentation' },
      { title: 'Website Development', href: '/services/website-development' },
      { title: 'ServiceNow Consulting', href: '/services/servicenow' },
      { title: 'AWS', href: '/services/aws' },
      { title: 'Java', href: '/services/java' },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    submenu: [
      { title: 'Manufacturing', href: '/industries/manufacturing' },
      { title: 'Education', href: '/industries/education' },
      { title: 'Health and Pharmaceuticals', href: '/industries/health-and-pharma' },
      { title: 'Real Estate', href: '/industries/real-estate' },
      { title: 'Travel and Hospitality', href: '/industries/travel-and-hospitality' },
      { title: 'Non Profit', href: '/industries/non-profit' },
    ],
  },
  { title: 'Careers', href: '/careers' },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="CloudVandexa Logo"
            width={220}
            height={80}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 font-medium text-gray-800">
          {menu.map((item) => (
            <div key={item.title} className="relative group">
              {item.submenu ? (
                <>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                    <ChevronDown size={16} />
                  </Link>
                  <div
                    className="submenu absolute left-0 top-full w-56 bg-white shadow-lg rounded-xl 
                    opacity-0 translate-y-1 
                    group-hover:opacity-100 group-hover:translate-y-2 
                    invisible group-hover:visible
 transition-all duration-300"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 transition">
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <input id="mobile-menu-toggle" type="checkbox" className="peer hidden" />
          <label htmlFor="mobile-menu-toggle" className="cursor-pointer">
            <MenuIcon size={28} className="peer-checked:hidden block text-gray-700" />
            <CrossIcon size={28} className="peer-checked:block hidden text-gray-700" />
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden absolute right-0 bg-white shadow-lg w-48 hidden peer-checked:block z-50 rounded-lg overflow-hidden mt-2">
        {menu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/contact-us"
          className="block px-5 py-3 text-sm font-medium bg-blue-600 text-white text-center hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

