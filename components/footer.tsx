import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3D2914] text-[#F5E6D3]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="relative h-16 w-56 mb-4 bg-white rounded-lg p-2">
              <Image
                src="/abearco-logo-transparent.png"
                alt="ABEARCO Inc Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-[#D4A76A]">
              A Navajo owned company serving indigenous communities, their people, and partners across the Nation with a diverse team.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-company" className="text-sm hover:text-[#C5582A] transition-colors">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-sm hover:text-[#C5582A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm hover:text-[#C5582A] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#C5582A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-[#C5582A]" />
                <a href="tel:928-640-0101" className="hover:text-[#C5582A] transition-colors">
                  928-640-0101
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-[#C5582A]" />
                <a href="mailto:Mike@abearcodevelopment.com" className="hover:text-[#C5582A] transition-colors">
                  Mike@abearcodevelopment.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-[#C5582A] mt-0.5" />
                <span>Navajo Nation, Arizona</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#D4A76A]/20 text-center">
          <p className="text-sm text-[#D4A76A]">
            © {new Date().getFullYear()} ABEARCO Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
