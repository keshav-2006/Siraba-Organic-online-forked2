import React, { useEffect } from "react";
import {
  ClipboardList,
  ShieldCheck,
  MapPin,
  CreditCard,
  FileText,
  CheckCircle,
  LayoutDashboard,
  Mail,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <ClipboardList size={22} className="text-emerald-600" />,
    title: "Vendor Application",
    description:
      "Vendors submit business details including company name, business description, website (optional), product categories, and certification information.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={22} className="text-emerald-600" />,
    title: "Business Information Verification",
    description:
      "Vendors provide compliance information such as GST Number, PAN Number, and FSSAI License (for food products).",
  },
  {
    id: 3,
    icon: <MapPin size={22} className="text-emerald-600" />,
    title: "Address Details",
    description:
      "Vendors provide their registered business address including street, city, state, postal code, and country.",
  },
  {
    id: 4,
    icon: <CreditCard size={22} className="text-emerald-600" />,
    title: "Bank Details",
    description:
      "Vendors provide banking information for payouts including account holder name, account number, bank name, IFSC code, and branch name.",
  },
  {
    id: 5,
    icon: <FileText size={22} className="text-emerald-600" />,
    title: "Document Upload",
    description:
      "Vendors upload business registration certificate, GST certificate, FSSAI license (if applicable), organic certification documents, and PAN card.",
  },
];

const dashboardFeatures = [
  "Manage products and inventory",
  "Track and process orders",
  "View sales analytics",
  "Manage payouts",
];

const WatermarkBg = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none select-none fixed inset-0 z-0 overflow-hidden"
    style={{ opacity: 0.04 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <defs>
        <pattern
          id="siraba-wm-vog"
          x="0"
          y="0"
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
        >
          <g transform="translate(90,90)">
            <ellipse cx="0" cy="-18" rx="22" ry="38" fill="none" stroke="#16a34a" strokeWidth="3" transform="rotate(-20)" />
            <ellipse cx="0" cy="-18" rx="22" ry="38" fill="none" stroke="#16a34a" strokeWidth="3" transform="rotate(20)" />
            <text x="0" y="8" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="28" fill="#16a34a">S</text>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#siraba-wm-vog)" />
    </svg>
  </div>
);

const VendorOnboardingGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-20 bg-background min-h-screen relative">
      <WatermarkBg />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-3">
            Siraba Organic · Certification-Led | Traceable | Globally Compliant
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
            Vendor Onboarding Guide
          </h1>
          <p className="text-text-secondary text-sm uppercase tracking-[0.2em]">
            Siraba Organic Marketplace
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-7 mb-10">
          <p className="text-text-secondary leading-relaxed font-light">
            This guide explains the onboarding process for vendors who wish to
            sell certified organic products on the Siraba Organic platform. The
            process ensures compliance with certification requirements and
            maintains the integrity of the marketplace.
          </p>
        </div>

        {/* Eligibility */}
        <div className="mb-10">
          <h2 className="font-heading text-xl md:text-2xl text-primary font-bold mb-5 flex items-center gap-2">
            <ShieldCheck size={22} className="text-emerald-600" />
            Eligibility Requirements
          </h2>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 p-6">
            <p className="text-text-secondary font-light leading-relaxed text-sm mb-4">
              Vendors must hold recognized organic certifications such as EU
              Organic, USDA Organic, or NPOP (India Organic).
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-white rounded-xl border border-emerald-100 px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
                  Domestic Listing
                </p>
                <p className="text-sm text-text-secondary font-light">
                  Minimum <span className="font-semibold text-primary">one</span> recognized organic certification required.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-emerald-100 px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
                  International Sales
                </p>
                <p className="text-sm text-text-secondary font-light">
                  Minimum <span className="font-semibold text-primary">two</span> certifications recommended.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["EU Organic", "USDA Organic", "NPOP (India Organic)"].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 bg-white border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-2 rounded-full shadow-sm"
                >
                  <CheckCircle size={11} className="text-emerald-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Onboarding Steps */}
        <div className="mb-10">
          <h2 className="font-heading text-xl md:text-2xl text-primary font-bold mb-6">
            Vendor Onboarding Process
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.id} className="flex gap-4">
                {/* Step spine */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-md">
                    {step.id}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-emerald-100 mt-2 mb-0 min-h-[24px]" />
                  )}
                </div>
                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-emerald-100 shadow-sm p-5 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="font-heading font-bold text-primary text-base">
                      Step {step.id} — {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Process */}
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-7 mb-8">
          <h2 className="font-heading text-xl font-bold text-primary mb-3 flex items-center gap-2">
            <CheckCircle size={20} className="text-emerald-600" />
            Verification Process
          </h2>
          <p className="text-text-secondary font-light leading-relaxed text-sm">
            After submission, Siraba Organic reviews vendor applications,
            verifies certification documents, and confirms compliance
            documentation before approving vendor accounts.
          </p>
        </div>

        {/* Dashboard Access */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 p-7 mb-10">
          <h2 className="font-heading text-xl font-bold text-primary mb-3 flex items-center gap-2">
            <LayoutDashboard size={20} className="text-emerald-600" />
            Vendor Dashboard Access
          </h2>
          <p className="text-text-secondary font-light text-sm mb-4">
            Once approved, vendors can access the vendor dashboard to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dashboardFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-emerald-100 shadow-sm">
                <ArrowRight size={13} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-text-secondary font-light">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Footer */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-lg text-center">
          <h3 className="font-heading text-xl font-bold mb-2">Support</h3>
          <p className="text-emerald-100 text-sm mb-6">
            For assistance during onboarding, please contact us.
          </p>
          <a
            href="mailto:info@sirabaorganic.com?subject=Vendor%20Onboarding%20-%20Siraba%20Organic"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-colors shadow-md"
          >
            <Mail size={15} />
            info@sirabaorganic.com
          </a>
          <p className="text-emerald-200 text-xs mt-5">
            UDYAM-HR-05-0179395 · www.sirabaorganic.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default VendorOnboardingGuide;