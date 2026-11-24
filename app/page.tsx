import Link from "next/link";
import Image from "next/image";
import { Building2, Users, Compass, Mountain, Sun, Handshake, ArrowRight } from "lucide-react";
import HomeAnimations from "@/components/home-animations";

const services = [
  {
    title: "Development",
    description: "Real estate development, construction management, and strategic project execution.",
    icon: Mountain,
    href: "/development",
    color: "bg-[#3D2914]",
  },
  {
    title: "Consulting",
    description: "AI integration, website development, tourism initiatives, and strategic advisory services.",
    icon: Users,
    href: "/consulting",
    color: "bg-[#C5582A]",
  },
  {
    title: "Project Management",
    description: "End-to-end project oversight including solar development from residential to utility-scale.",
    icon: Building2,
    href: "/project-management",
    color: "bg-[#4A7C8E]",
  },
];

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/monument-valley.jpg"
            alt="Arizona Desert Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3D2914]/80 via-[#3D2914]/60 to-[#3D2914]/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <HomeAnimations>
            <div className="relative h-32 w-96 mx-auto mb-8 bg-white rounded-2xl p-4 shadow-xl">
              <Image
                src="/abearco-logo-transparent.png"
                alt="ABEARCO Inc"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Partnerships,<br />
              <span className="text-[#D4A76A]">Honoring Heritage</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-2xl mx-auto mb-10">
              A Navajo-owned company dedicated to building strategic partnerships across development, project management, and advisory services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/our-company"
                className="inline-flex items-center gap-2 rounded-full bg-[#C5582A] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#A84820] transition-all hover:scale-105"
              >
                Learn About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </HomeAnimations>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-4">
              Our <span className="text-[#C5582A]">Services</span>
            </h2>
            <p className="text-lg text-[#5A3D1E] max-w-2xl mx-auto">
              Comprehensive solutions designed to support economic development and community growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services?.map((service) => (
              <Link key={service?.title} href={service?.href ?? "#"}>
                <div className="group h-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`${service?.color ?? 'bg-[#C5582A]'} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {service?.icon && <service.icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#3D2914] mb-2 group-hover:text-[#C5582A] transition-colors">
                    {service?.title}
                  </h3>
                  <p className="text-[#5A3D1E] text-sm">
                    {service?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-gradient-to-r from-[#4A7C8E] to-[#3D6875]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Handshake className="h-10 w-10 text-[#D4A76A]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Partner With Us
                </h2>
              </div>
              <p className="text-lg text-[#F5E6D3] max-w-xl">
                With an established footprint on Navajo Nation, we&apos;re expanding to serve tribes across the nation. Let&apos;s build something meaningful together.
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#4A7C8E] shadow-lg hover:bg-[#F5E6D3] transition-all hover:scale-105"
            >
              Explore Partnerships
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#F5E6D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-6">
                Rooted in <span className="text-[#C5582A]">Tradition</span>,<br />
                Focused on the Future
              </h2>
              <p className="text-lg text-[#5A3D1E] mb-6">
                Founded on the principles of respect, integrity, and community, ABEARCO Inc. brings decades of experience working with tribal governments and partners to deliver results that matter.
              </p>
              <p className="text-lg text-[#5A3D1E] mb-8">
                Our deep understanding of the unique challenges and opportunities facing tribal nations positions us as a trusted partner in your journey toward sustainable growth.
              </p>
              <Link
                href="/our-company"
                className="inline-flex items-center gap-2 text-[#C5582A] font-semibold hover:gap-3 transition-all"
              >
                Learn More About Our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/partnership.jpg"
                  alt="Building Partnerships"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
