"use client";

import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: "/icons/linkedin.svg" },
  { href: "#", label: "X", icon: "/icons/x.svg" },
  { href: "#", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "#", label: "YouTube", icon: "/icons/youtube.svg" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Social */}
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <div className="w-32 h-16 flex items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-extrabold text-(--secondary-color) tracking-widest">
                CLOUDVANDEXA
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <Link href={href} aria-label={label} key={label}>
                <Image src={icon} alt={label} width={28} height={28} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-(--secondary-color) ${
                    pathname === href ? "active" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-start gap-3 mb-2">
            <MapPin className="w-6 h-6 text-(--secondary-color) mt-1" />
            <div>
              <span className="block font-medium">CloudVandexa</span>
              <span className="block">
                548 Market Street PBM 88159
                <br />
                San Francisco, CA 94104
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-(--secondary-color)" />
            <Link href="/contact-us" className="font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
