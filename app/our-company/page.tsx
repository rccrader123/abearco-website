import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Award, Target, Heart, ArrowRight } from "lucide-react";

export default function OurCompanyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/monument-valley.jpg"
            alt="Monument Valley"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2914]/95 via-[#3D2914]/80 to-[#3D2914]/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#D4A76A]">Company</span>
          </h1>
          <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
            A Navajo-owned company dedicated to empowering tribal nations through partnership, expertise, and shared vision.
          </p>
        </div>
      </section>

      {/* Company Bio */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D2914] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#5A3D1E]">
                <p>
                  ABEARCO Inc. is a Navajo-owned consulting and development company with deep roots in the communities we serve. Established on the Navajo Nation, we have built our reputation on trust, integrity, and a genuine commitment to tribal economic advancement.
                </p>
                <p>
                  Our expertise spans multiple sectors including tourism development, management consulting, real estate development, and strategic partnerships. We understand the unique regulatory, cultural, and economic landscape that tribal governments navigate, and we leverage that knowledge to deliver meaningful results.
                </p>
                <p>
                  With an established footprint on Navajo Nation, we are now expanding our services to partner with tribes across the nation, bringing our proven approach and dedication to new communities while honoring the values that have guided us from the beginning.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#C5582A]/20 to-[#4A7C8E]/20 rounded-2xl p-8">
                <div className="relative h-64 w-full bg-white rounded-xl shadow-lg">
                  <Image
                    src="/abearco-logo-transparent.png"
                    alt="ABEARCO Inc"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3D2914] text-center mb-12">
            Our <span className="text-[#C5582A]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#C5582A] rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3D2914] mb-3">Respect</h3>
              <p className="text-[#5A3D1E]">
                We honor the traditions, sovereignty, and aspirations of the tribal nations we serve. Every partnership begins with respect.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#4A7C8E] rounded-lg flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3D2914] mb-3">Integrity</h3>
              <p className="text-[#5A3D1E]">
                Our word is our bond. We deliver on our commitments and maintain transparency in all our business dealings.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B6914] rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3D2914] mb-3">Results</h3>
              <p className="text-[#5A3D1E]">
                We focus on delivering tangible outcomes that create lasting value for tribal communities and their partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3D2914] text-center mb-12">
            Meet Our <span className="text-[#C5582A]">Founder</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#C5582A] to-[#8B6914] p-8">
                <div className="flex items-center gap-6">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0">
                    <Image
                      src="/images/mike-headshot.jpg"
                      alt="Michael Anderson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Michael Anderson</h3>
                    <p className="text-[#F5E6D3]">Founder & Principal</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#5A3D1E] mb-6">
                  Michael Anderson is an established Navajo entrepreneur and executive with over 40 years of leadership experience. A proud member of the Navajo Nation, he founded ABEARCO Inc. in 1998 in Page, Arizona, with a vision to create a company that could serve as a bridge between tribal governments and the broader business community.
                </p>
                <p className="text-[#5A3D1E] mb-6">
                  In addition to leading ABEARCO Inc., Michael also serves as a principal at ABEARCO MACRO Development Partners, bringing his extensive expertise in real estate development, public safety, strategic consulting, and tribal economic advancement to a growing portfolio of initiatives. His deep understanding of both indigenous culture and modern business practices has made ABEARCO a trusted partner for tribes seeking to develop sustainable economic initiatives while preserving their heritage.
                </p>
                <div className="border-t border-[#D4A76A]/30 pt-6 mt-6">
                  <h4 className="text-lg font-semibold text-[#3D2914] mb-4">Contact Michael</h4>
                  <div className="flex flex-wrap gap-6">
                    <a href="tel:928-640-0101" className="flex items-center gap-2 text-[#5A3D1E] hover:text-[#C5582A] transition-colors">
                      <Phone className="h-5 w-5 text-[#C5582A]" />
                      928-640-0101
                    </a>
                    <a href="mailto:Mike@abearcodevelopment.com" className="flex items-center gap-2 text-[#5A3D1E] hover:text-[#C5582A] transition-colors">
                      <Mail className="h-5 w-5 text-[#C5582A]" />
                      Mike@abearcodevelopment.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4A7C8E]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start a Conversation?
          </h2>
          <p className="text-[#F5E6D3] mb-8 max-w-xl mx-auto">
            We&apos;re here to discuss how ABEARCO can support your tribal nation&apos;s goals.
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
