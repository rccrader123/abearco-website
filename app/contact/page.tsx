import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#4A7C8E] to-[#3D6875]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-[#D4A76A]">Touch</span>
          </h1>
          <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
            Ready to start a conversation? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#3D2914] mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C5582A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2914] mb-1">Phone</h3>
                    <a href="tel:928-640-0101" className="text-[#5A3D1E] hover:text-[#C5582A] transition-colors">
                      928-640-0101
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4A7C8E] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2914] mb-1">Email</h3>
                    <a href="mailto:Mike@abearcodevelopment.com" className="text-[#5A3D1E] hover:text-[#C5582A] transition-colors">
                      Mike@abearcodevelopment.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B6914] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2914] mb-1">Location</h3>
                    <p className="text-[#5A3D1E]">
                      Navajo Nation, Arizona
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3D2914] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2914] mb-1">Business Hours</h3>
                    <p className="text-[#5A3D1E]">
                      Monday - Friday: 8:00 AM - 5:00 PM MST
                    </p>
                  </div>
                </div>
              </div>

              {/* Michael Anderson */}
              <div className="mt-12 bg-gradient-to-br from-[#C5582A]/10 to-[#8B6914]/10 rounded-xl p-6">
                <h3 className="font-semibold text-[#3D2914] mb-2">Direct Contact</h3>
                <p className="text-[#5A3D1E] mb-4">
                  For immediate inquiries, reach out directly to Michael Anderson.
                </p>
                <div className="space-y-2">
                  <a href="tel:928-640-0101" className="flex items-center gap-2 text-[#C5582A] hover:text-[#A84820] transition-colors">
                    <Phone className="h-4 w-4" />
                    928-640-0101
                  </a>
                  <a href="mailto:Mike@abearcodevelopment.com" className="flex items-center gap-2 text-[#C5582A] hover:text-[#A84820] transition-colors">
                    <Mail className="h-4 w-4" />
                    Mike@abearcodevelopment.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#3D2914] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#5A3D1E] mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
                <p className="text-xs text-[#5A3D1E]/70 mt-4">
                  Your information is kept confidential and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
