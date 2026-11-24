import Link from "next/link";
import Image from "next/image";
import { Users, FileText, TrendingUp, Shield, Landmark, Handshake, Compass, Globe, Code, Cpu, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "AI Integration",
    description: "Implementing artificial intelligence solutions to streamline operations and enhance decision-making.",
    icon: Cpu,
  },
  {
    title: "Website Development",
    description: "Building professional websites and digital platforms that drive engagement and growth.",
    icon: Code,
  },
  {
    title: "Regulatory Navigation",
    description: "Expert guidance through complex federal, state, and tribal regulatory requirements.",
    icon: Shield,
  },
  {
    title: "Grant Writing & Funding",
    description: "Securing grants and funding opportunities for community projects and initiatives.",
    icon: FileText,
  },
  {
    title: "Economic Development",
    description: "Strategic planning to drive sustainable economic growth and diversification.",
    icon: TrendingUp,
  },
  {
    title: "Government Relations",
    description: "Building and maintaining productive relationships with government stakeholders.",
    icon: Landmark,
  },
  {
    title: "Stakeholder Engagement",
    description: "Facilitating meaningful dialogue between communities and project partners.",
    icon: Handshake,
  },
  {
    title: "Business Strategy",
    description: "Developing comprehensive business strategies for sustainable success.",
    icon: Users,
  },
];

export default function ConsultingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/consulting_meeting.jpg"
            alt="Consulting Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2914]/95 via-[#3D2914]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Consulting <span className="text-[#D4A76A]">Services</span>
          </h1>
          <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
            Expert consulting to help clients navigate complex business landscapes and drive meaningful growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-4">
              Our <span className="text-[#C5582A]">Expertise</span>
            </h2>
            <p className="text-lg text-[#5A3D1E] max-w-2xl mx-auto">
              Comprehensive consulting services designed to support your organization's success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-[#C5582A] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3D2914] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5A3D1E]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/lake-powell.jpg"
                alt="Tourism Development"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-8 w-8 text-[#C5582A]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914]">
                  Tourism <span className="text-[#C5582A]">Development</span>
                </h2>
              </div>
              <p className="text-lg text-[#5A3D1E] mb-6">
                We specialize in developing sustainable tourism initiatives that bring business and visitors to Navajo Nation and other indigenous communities. Our tourism consulting helps communities leverage their unique cultural heritage and natural landscapes.
              </p>
              <ul className="space-y-4">
                {[
                  "Tourism master planning and strategy",
                  "Cultural tourism program development",
                  "Eco-tourism and adventure tourism",
                  "Hospitality development consulting",
                  "Destination marketing strategies",
                  "Community engagement and training",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C5582A] flex-shrink-0" />
                    <span className="text-[#5A3D1E]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C5582A] to-[#A84820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-[#F5E6D3] mb-8">
            Whether you need strategic guidance or tourism development expertise, we're here to help you succeed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#C5582A] shadow-lg hover:bg-[#F5E6D3] transition-all hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
