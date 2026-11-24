"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Company", href: "/our-company" },
  { name: "Development", href: "/development" },
  { name: "Consulting", href: "/consulting" },
  { name: "Project Management", href: "/project-management" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="relative h-14 w-48">
                <Image
                  src="/abearco-logo-transparent.png"
                  alt="ABEARCO Inc Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#3D2914]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href ?? "/"}
                className="text-sm font-semibold leading-6 text-[#3D2914] hover:text-[#C5582A] transition-colors"
              >
                {item?.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-[#C5582A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A84820] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FAF6F0] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#D4A76A]/20">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <div className="relative h-12 w-40">
                    <Image src="/abearco-logo-transparent.png" alt="ABEARCO Inc Logo" fill className="object-contain" />
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#3D2914]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-[#D4A76A]/20">
                  <div className="space-y-2 py-6">
                    {navigation?.map((item) => (
                      <Link
                        key={item?.name}
                        href={item?.href ?? "/"}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#3D2914] hover:bg-[#F5E6D3]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item?.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
