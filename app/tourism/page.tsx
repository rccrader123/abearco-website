import Link from "next/link";
import Image from "next/image";
import { Compass, Map, Camera, Users, TreePine, Tent, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Tourism Master Planning",
    description: "Develop comprehensive tourism strategies that balance economic opportunity with cultural and environmental preservation."
  },
  {
    icon: Camera,
    title: "Cultural Tourism Development",
    description: "Create authentic cultural experiences that educate visitors while honoring and protecting tribal heritage."
  },
  {
    icon: TreePine,
    title: "Eco-Tourism Initiatives",
    description: "Design sustainable outdoor recreation and nature-based tourism programs that protect the land."
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Involve tribal members in tourism planning and create opportunities for community participation."
  },
  {
    icon: Tent,
    title: "Hospitality Development",
    description: "Guide the development of lodging, restaurants, and visitor services that meet market demands."
  },
  {
    icon: Compass,
    title: "Destination Marketing",
    description: "Position tribal destinations in the tourism marketplace through strategic marketing and branding."
  }
];

export default function TourismPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tourism_arizona.jpg"
            alt="Arizona Tourism"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/90 to-[#C5582A]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tourism Development
            </h1>
            <p className="text-xl text-[#F5E6D3]">
              Creating sustainable tourism initiatives that celebrate and preserve indigenous culture while generating economic opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3D2914] mb-6">
              Sharing <span className="text-[#C5582A]">Heritage</span> with the World
            </h2>
            <p className="text-lg text-[#5A3D1E]">
              Tourism offers tremendous opportunity for tribal nations to share their culture, create jobs, and generate revenue. We help tribes develop tourism programs that are authentic, sustainable, and aligned with community values.
            </p>
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

      {/* Our Approach */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D2914] mb-6">
                Sustainable <span className="text-[#C5582A]">Tourism</span> Development
              </h2>
              <ul className="space-y-4">
                {[
                  "Community-driven planning that respects local input",
                  "Cultural sensitivity in all visitor experiences",
                  "Environmental stewardship and land protection",
                  "Economic benefits distributed within the community",
                  "Training and employment opportunities for tribal members"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#C5582A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5A3D1E]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#8B6914] to-[#C5582A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Explore Tourism Opportunities</h3>
              <p className="text-[#F5E6D3] mb-6">
                Ready to develop tourism initiatives that honor your culture and create economic opportunity? Let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#C5582A] hover:bg-[#F5E6D3] transition-colors"
              >
                Start Planning
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
