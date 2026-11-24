"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? ""]: value ?? "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response?.json?.();

      if (result?.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", organization: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result?.message ?? "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#3D2914] mb-2">Message Sent!</h3>
        <p className="text-[#5A3D1E] mb-4">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#C5582A] font-semibold hover:text-[#A84820] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 rounded-lg text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#3D2914] mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData?.name ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#3D2914] mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData?.email ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#3D2914] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914]"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-[#3D2914] mb-1">
            Organization/Tribe
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData?.organization ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914]"
            placeholder="Your organization or tribe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#3D2914] mb-1">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData?.subject ?? ""}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914]"
        >
          <option value="">Select a subject</option>
          <option value="Management Services">Management Services</option>
          <option value="Consulting Services">Consulting Services</option>
          <option value="Tourism Development">Tourism Development</option>
          <option value="Real Estate Development">Real Estate Development</option>
          <option value="Partnership Inquiry">Partnership Inquiry</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#3D2914] mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData?.message ?? ""}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#D4A76A]/30 focus:border-[#C5582A] focus:ring-1 focus:ring-[#C5582A] outline-none transition-colors bg-white text-[#3D2914] resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#C5582A] px-6 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#A84820] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
