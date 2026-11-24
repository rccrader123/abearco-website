import Link from "next/link";
import Image from "next/image";
import { Sun, Home, Building2, Zap, Users, ClipboardList, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete residential solar solutions from assessment through installation, helping tribal members reduce energy costs and achieve energy independence."
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Mid-scale solar installations for tribal enterprises, government buildings, and community facilities."
  },
  {
    icon: Zap,
    title: "Utility-Scale Solar",
    description: "Planning and execution of large-scale solar farms and utility-grade installations in partnership with leading solar developers."
  },
  {
    icon: Users,
    title: "Partner Coordination",
    description: "Connecting tribal entities with established solar partners and developers to bring projects from concept to reality."
  },
  {
    icon: ClipboardList,
    title: "Project Development",
    description: "End-to-end project development including site assessment, permitting, financing coordination, and construction oversight."
  },
  {
    icon: Sun,
    title: "Energy Planning",
    description: "Strategic energy planning to help tribes maximize the benefits of solar investment and achieve long-term energy goals."
  }
];

export default function SolarPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/solar_farm.jpg"
            alt="Solar Farm Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2914]/90 to-[#3D2914]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-[#8B6914] rounded-full flex items-center justify-center mb-6">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solar Energy Solutions
            </h1>
            <p className="text-xl text-[#F5E6D3]">
              From residential installations to utility-scale solar farms, we help tribal nations harness the power of the sun.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#3D2914] mb-6">
                Powering <span className="text-[#C5582A]">Tribal</span> Energy Independence
              </h2>
              <p className="text-lg text-[#5A3D1E] mb-4">
                The Southwest offers tremendous solar potential, and tribal lands are uniquely positioned to benefit from clean energy development. ABEARCO works with tribal entities to develop solar solutions at every scale.
              </p>
              <p className="text-lg text-[#5A3D1E]">
                Whether you&apos;re looking to reduce energy costs for tribal housing, power community facilities, or develop utility-scale solar projects with our established partners, we bring the expertise and relationships to make it happen.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/residential_solar.jpg"
                alt="Residential Solar Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <div key={service?.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#8B6914]/10 rounded-lg flex items-center justify-center mb-4">
                  {service?.icon && <service.icon className="h-6 w-6 text-[#8B6914]" />}
                </div>
                <h3 className="text-xl font-semibold text-[#3D2914] mb-2">{service?.title}</h3>
                <p className="text-[#5A3D1E] text-sm">{service?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D2914] mb-4">
              Solutions at <span className="text-[#C5582A]">Every Scale</span>
            </h2>
            <p className="text-lg text-[#5A3D1E] max-w-2xl mx-auto">
              From individual homes to utility-grade installations, we tailor our approach to meet your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#4A7C8E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2914] mb-2">Residential</h3>
              <p className="text-[#5A3D1E] text-sm">
                Individual home installations that reduce energy bills and increase energy independence for tribal members.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#C5582A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2914] mb-2">Commercial</h3>
              <p className="text-[#5A3D1E] text-sm">
                Mid-scale installations for tribal businesses, government buildings, schools, and community centers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#8B6914] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2914] mb-2">Utility-Scale</h3>
              <p className="text-[#5A3D1E] text-sm">
                Large-scale solar farms developed in partnership with leading solar developers, creating revenue and energy for tribes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8B6914] to-[#C5582A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Partner With Us on Solar
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Access to established solar development partners",
                  "Expertise in tribal land solar permitting",
                  "Project financing coordination",
                  "Full project management from concept to completion",
                  "Long-term maintenance and monitoring support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#F5E6D3] flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#3D2914] mb-4">Let&apos;s Talk Solar</h3>
              <p className="text-[#5A3D1E] mb-6">
                Ready to explore solar opportunities for your tribal nation? Contact us to discuss how we can help you harness the power of the sun.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#C5582A] px-6 py-3 font-semibold text-white hover:bg-[#A84820] transition-colors"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
