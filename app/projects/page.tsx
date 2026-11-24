import Link from "next/link";
import { Construction, Clock, ArrowRight, Bell } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#3D2914] via-[#5A3D1E] to-[#8B6914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="h-12 w-12 text-[#D4A76A]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Projects <span className="text-[#D4A76A]">Coming Soon</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#D4A76A] mb-8">
            <Clock className="h-5 w-5" />
            <span className="text-lg">Under Development</span>
          </div>
          <p className="text-xl text-[#F5E6D3] max-w-2xl mx-auto mb-12">
            We&apos;re working on showcasing our portfolio of completed projects and current initiatives. Check back soon to see the impact we&apos;re making across tribal communities.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bell className="h-6 w-6 text-[#D4A76A]" />
              <h2 className="text-xl font-semibold text-white">Stay Updated</h2>
            </div>
            <p className="text-[#F5E6D3] mb-6">
              Want to learn more about our work? Reach out and we&apos;ll share details about our ongoing projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#C5582A] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#A84820] transition-all hover:scale-105"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3D2914] text-center mb-12">
            What to <span className="text-[#C5582A]">Expect</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-[#C5582A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#C5582A]">01</span>
              </div>
              <h3 className="text-lg font-semibold text-[#3D2914] mb-2">Case Studies</h3>
              <p className="text-[#5A3D1E] text-sm">
                Detailed looks at successful projects and the outcomes achieved.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-[#4A7C8E]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4A7C8E]">02</span>
              </div>
              <h3 className="text-lg font-semibold text-[#3D2914] mb-2">Current Initiatives</h3>
              <p className="text-[#5A3D1E] text-sm">
                Updates on projects currently in progress across tribal communities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-[#8B6914]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#8B6914]">03</span>
              </div>
              <h3 className="text-lg font-semibold text-[#3D2914] mb-2">Impact Stories</h3>
              <p className="text-[#5A3D1E] text-sm">
                Real stories of how our work has benefited communities and partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
