import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";

const partners = [
  {
    name: "ABEARCO MACRO Development Partners",
    logo: "/images/partners/macro-logo.jpg",
    bgColor: "bg-[#F5F5F0]",
  },
  {
    name: "Helios Development Group",
    logo: "/images/partners/helios-logo.jpg",
    bgColor: "bg-[#1a1a1a]",
  },
  {
    name: "Solterra Group",
    logo: "/images/partners/solterra-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "Trinity Design & Construction",
    logo: "/images/partners/trinity-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "LPL Solar",
    logo: "/images/partners/lpl-solar-logo.webp",
    bgColor: "bg-[#2D2D2D]",
  },
  {
    name: "BestHire",
    logo: "/images/partners/besthire-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "Navajo Nation",
    logo: "/images/partners/navajo-nation-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "Navajo Nation Parks and Recreation",
    logo: "/images/partners/navajo-parks-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "Navajo Nation Department of Health",
    logo: "/images/partners/navajo-health-logo.png",
    bgColor: "bg-white",
  },
  {
    name: "Papillon Grand Canyon Helicopters",
    logo: "/images/partners/papillon-logo.png",
    bgColor: "bg-white",
  },
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#3D2914] via-[#5A3D1E] to-[#3D2914]">
        <div className="absolute inset-0 bg-[url('/images/hero_desert.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#D4A76A]">Partners</span>
          </h1>
          <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
            Building lasting partnerships with organizations that share our commitment to excellence and community development.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-4">
              Trusted <span className="text-[#C5582A]">Collaborators</span>
            </h2>
            <p className="text-lg text-[#5A3D1E] max-w-2xl mx-auto">
              We work with leading organizations across development, solar energy, tourism, and tribal governance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={`${partner.bgColor} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center aspect-[3/2]`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="h-8 w-8 text-[#C5582A]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914]">
                  Partnership <span className="text-[#C5582A]">Philosophy</span>
                </h2>
              </div>
              <p className="text-lg text-[#5A3D1E] mb-6">
                At ABEARCO, we believe that meaningful partnerships are built on trust, shared values, and mutual respect. Our partners range from tribal governments to solar developers, construction firms to tourism operators.
              </p>
              <p className="text-lg text-[#5A3D1E] mb-6">
                We seek partners who understand the unique opportunities and responsibilities of working with indigenous communities and are committed to delivering lasting value.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/partnership.jpg"
                alt="Partnership Handshake"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C5582A] to-[#A84820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Partnering With Us?
          </h2>
          <p className="text-xl text-[#F5E6D3] mb-8">
            We're always looking to connect with organizations that share our vision for community development and sustainable growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#C5582A] shadow-lg hover:bg-[#F5E6D3] transition-all hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
