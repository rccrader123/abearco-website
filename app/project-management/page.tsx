import Link from "next/link";
import Image from "next/image";
import { ClipboardList, Sun, Zap, Building2, Users, Target, Home, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Strategic Project Planning",
    description: "Comprehensive planning and coordination for complex development projects from inception to completion.",
    icon: Target,
  },
  {
    title: "Construction Management",
    description: "Expert oversight of construction activities, ensuring projects are delivered on time and within budget.",
    icon: Building2,
  },
  {
    title: "Solar Development",
    description: "Full-service solar project management from residential installations to utility-scale solar farms.",
    icon: Sun,
  },
  {
    title: "Residential Solar",
    description: "Coordinating rooftop solar installations for homes and small businesses with our trusted partners.",
    icon: Home,
  },
  {
    title: "Commercial & Utility Solar",
    description: "Managing large-scale solar projects including commercial installations and utility-grade solar farms.",
    icon: Zap,
  },
  {
    title: "Team Coordination",
    description: "Assembling and managing A/E/C teams with the right expertise for each unique project.",
    icon: Users,
  },
];

export default function ProjectManagementPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/management_meeting.jpg"
            alt="Project Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2914]/95 via-[#3D2914]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project <span className="text-[#D4A76A]">Management</span>
          </h1>
          <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
            Expert project management services including solar energy development, construction oversight, and strategic planning.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-4">
              Our <span className="text-[#C5582A]">Services</span>
            </h2>
            <p className="text-lg text-[#5A3D1E] max-w-2xl mx-auto">
              Comprehensive project management solutions from traditional construction to renewable energy development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-[#4A7C8E] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
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

      {/* Solar Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D2914] mb-6">
                Solar Energy <span className="text-[#C5582A]">Solutions</span>
              </h2>
              <p className="text-lg text-[#5A3D1E] mb-6">
                We manage solar projects at every scale—from residential rooftop installations to utility-grade solar farms. Our partnerships with leading solar developers and installers ensure quality and reliability.
              </p>
              <ul className="space-y-4">
                {[
                  "Residential solar installations",
                  "Commercial solar projects",
                  "Utility-scale solar farms",
                  "Permitting and regulatory compliance",
                  "Financing coordination",
                  "Long-term maintenance planning",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C5582A] flex-shrink-0" />
                    <span className="text-[#5A3D1E]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/solar_farm.jpg"
                alt="Solar Farm Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4A7C8E] to-[#3D6A7A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#D4E8EF] mb-8">
            From solar installations to complex construction projects, we bring the expertise and partnerships to deliver results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#4A7C8E] shadow-lg hover:bg-[#F5E6D3] transition-all hover:scale-105"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
