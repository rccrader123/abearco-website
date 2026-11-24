import Link from "next/link";
import Image from "next/image";
import { Mountain, HardHat, Users, Search, BarChart3, ClipboardList, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Development & Construction Management",
    description: "Full-service oversight of development projects from groundbreaking to completion, ensuring quality, timeline, and budget adherence."
  },
  {
    icon: Users,
    title: "A/E/C Team Building",
    description: "Assembling and coordinating the right Architect, Engineer, and Contractor teams tailored to your project&apos;s specific needs and requirements."
  },
  {
    icon: Search,
    title: "Deal Sourcing",
    description: "Identifying and evaluating development opportunities that align with tribal goals and community priorities."
  },
  {
    icon: BarChart3,
    title: "Feasibility & Market Analysis",
    description: "Comprehensive studies to assess project viability, market demand, financial projections, and risk factors before commitment."
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project coordination including scheduling, budgeting, contractor oversight, and stakeholder communication."
  },
  {
    icon: Mountain,
    title: "Land & Site Development",
    description: "Strategic planning and execution of site preparation, infrastructure, and land development to maximize project potential."
  }
];

export default function DevelopmentPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/construction.jpg"
            alt="Development and Construction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2914]/90 to-[#3D2914]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-[#C5582A] rounded-full flex items-center justify-center mb-6">
              <Mountain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development Services
            </h1>
            <p className="text-xl text-[#F5E6D3]">
              Comprehensive development and construction management services from deal sourcing through project completion.
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
                Full-Cycle <span className="text-[#C5582A]">Development</span> Expertise
              </h2>
              <p className="text-lg text-[#5A3D1E] mb-4">
                At ABEARCO, we provide comprehensive development services that take projects from initial concept through successful completion. Our team brings decades of experience in construction management, team coordination, and project execution.
              </p>
              <p className="text-lg text-[#5A3D1E]">
                We understand the unique challenges of development on tribal lands and leverage our expertise to navigate regulatory requirements, build effective teams, and deliver results that serve communities for generations.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/blueprints_meeting.jpg"
                alt="Team reviewing blueprints"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <div key={service?.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#C5582A]/10 rounded-lg flex items-center justify-center mb-4">
                  {service?.icon && <service.icon className="h-6 w-6 text-[#C5582A]" />}
                </div>
                <h3 className="text-xl font-semibold text-[#3D2914] mb-2">{service?.title}</h3>
                <p className="text-[#5A3D1E] text-sm">{service?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D2914] mb-6">
                Our <span className="text-[#C5582A]">Approach</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Thorough feasibility analysis before project commitment",
                  "Strategic A/E/C team assembly based on project requirements",
                  "Hands-on construction management and oversight",
                  "Clear communication with all stakeholders throughout",
                  "Budget management and cost control at every phase",
                  "Quality assurance from start to finish"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#C5582A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5A3D1E]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#3D2914] to-[#5A3D1E] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-[#F5E6D3] mb-6">
                Let&apos;s discuss how ABEARCO can help bring your development vision to life. From initial feasibility through project completion, we&apos;re here to deliver results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#3D2914] hover:bg-[#F5E6D3] transition-colors"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
