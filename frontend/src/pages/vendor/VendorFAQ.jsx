import React, { useEffect, useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What is the Siraba Organic Vendor Program?",
    a: "The Siraba Organic Vendor Program allows certified organic producers, processors, and exporters to list their products on the Siraba Organic platform and reach customers globally. Our goal is to build a trusted organic marketplace where every listed product meets strict certification, quality, and traceability standards.",
  },
  {
    q: "Who can become a vendor on Siraba Organic?",
    a: "Businesses eligible to apply include certified organic farmers, organic food processors, spice producers and exporters, organic product brands, and organic certified manufacturers. All vendors must comply with recognized organic certification standards.",
  },
  {
    q: "What certifications are required to sell on Siraba Organic?",
    a: "Vendors must hold recognized organic certifications such as EU Organic, USDA Organic, or NPOP (India Organic). At least one certification is required for domestic listing, and at least two certifications are recommended for products intended for international sales. Products must also meet Siraba Organic's quality and traceability standards before approval.",
  },
  {
    q: "What types of products can vendors list?",
    a: "Siraba Organic focuses on certified organic products, especially organic spices, herbs, food ingredients, and certified agricultural products. Our flagship categories currently include Kashmiri Saffron (Kesar) and Premium Asafoetida (Hing). Additional certified organic products may be considered for listing.",
  },
  {
    q: "How does the vendor onboarding process work?",
    a: "The onboarding process is designed to ensure quality, certification compliance, and transparency. It involves five steps: (1) Vendor Application — submit your inquiry via the Vendor Registration page or email; (2) Certification Verification — our team reviews your organic certification documents, business registration, and product category compliance; (3) Product Documentation — submit product descriptions, certification proof, quality documentation, and images; (4) Quality & Compliance Review — we verify certification validity, traceability, and compliance; (5) Vendor Account Activation — once approved, you can list products on the platform.",
  },
  {
    q: "Who is responsible for product certification and compliance?",
    a: "Vendors are responsible for maintaining organic certification validity, quality compliance, and export documentation (if applicable). Siraba Organic acts as a technology and marketplace platform that connects verified vendors with customers.",
  },
  {
    q: "Are products tested before listing?",
    a: "Products may undergo verification and laboratory testing to ensure purity, food safety compliance, and authenticity. Only products that meet Siraba Organic's standards are approved.",
  },
  {
    q: "Can vendors sell internationally through Siraba Organic?",
    a: "Yes. Vendors who hold multiple recognized certifications (such as USDA Organic and EU Organic) may be eligible for international marketplace exposure. International sales may also require export compliance documentation, food safety certifications, and proper packaging standards.",
  },
  {
    q: "Are there listing or commission fees?",
    a: "Vendor terms, commissions, or service charges may vary depending on product category, sales channel (B2C or B2B), and logistics support requirements. Details will be provided during vendor onboarding.",
  },
  {
    q: "How can vendors apply to become a Siraba Organic partner?",
    a: "Interested vendors may contact us at info@sirabaorganic.com with the subject line 'Vendor Registration'. Please include your company details, product category, and organic certification information. Our team will guide you through the onboarding process.",
  },
  {
    q: "How long does vendor approval take?",
    a: "Vendor applications are typically reviewed within 2–5 business days after all required documents and certifications are submitted.",
  },
  {
    q: "Can individual farmers apply as vendors?",
    a: "Yes. Individual farmers may apply if they hold recognized organic certification such as EU Organic, USDA Organic, or NPOP.",
  },
  {
    q: "Do vendors need their own organic certification?",
    a: "Yes. Vendors must hold valid certification for the products they wish to list. Siraba Organic only lists certified organic products to maintain marketplace trust.",
  },
  {
    q: "What happens if a certification expires?",
    a: "Vendors must update certification documents before expiry. Products may be temporarily removed from the platform if certification becomes invalid.",
  },
  {
    q: "Can vendors sell multiple products?",
    a: "Yes. Vendors can list multiple certified products as long as each product meets Siraba Organic's certification and compliance requirements.",
  },
  {
    q: "Who manages product packaging?",
    a: "Vendors are responsible for ensuring packaging complies with certification standards, labeling regulations, and export requirements (if applicable).",
  },
  {
    q: "Are vendors responsible for order fulfillment?",
    a: "Depending on the operational model, vendors may ship products directly, work with Siraba's logistics partners, or follow platform fulfillment guidelines. Details are provided during onboarding.",
  },
  {
    q: "Does Siraba Organic support international exports?",
    a: "Yes. Vendors holding multiple recognized certifications may be eligible to sell to international customers through the platform.",
  },
  {
    q: "What product information must vendors provide?",
    a: "Vendors must provide product description, certification details, origin information, product images, and packaging information.",
  },
  {
    q: "Can Siraba Organic reject product listings?",
    a: "Yes. Siraba Organic may reject or remove listings if products do not meet certification, documentation, or quality standards.",
  },
  {
    q: "Are vendors allowed to update product details?",
    a: "Yes. Vendors may update product descriptions, images, and pricing through their vendor dashboard.",
  },
  {
    q: "Who owns the product listings?",
    a: "Vendors retain ownership of their product content but grant Siraba Organic permission to display it on the platform.",
  },
  {
    q: "What happens if customers report quality issues?",
    a: "Siraba Organic may review the product and request documentation or clarification from the vendor to ensure compliance with platform standards.",
  },
  {
    q: "Can vendors sell products outside the spice category?",
    a: "Yes. Siraba Organic may allow other certified organic categories such as herbs, ingredients, and agricultural products if they meet certification requirements.",
  },
  {
    q: "How does Siraba Organic protect marketplace quality?",
    a: "Siraba Organic maintains marketplace integrity through certification verification, vendor compliance checks, documentation review, and periodic monitoring.",
  },
];

const onboardingSteps = [
  "Apply as Vendor",
  "Submit Certification Documents",
  "Product Verification",
  "Account Approval",
  "List Your Products",
  "Start Selling Globally",
];

const WatermarkBg = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none select-none fixed inset-0 z-0 overflow-hidden"
    style={{ opacity: 0.04 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
      <defs>
        <pattern id="siraba-wm-vfaq" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
          <g transform="translate(90,90)">
            <ellipse cx="0" cy="-18" rx="22" ry="38" fill="none" stroke="#16a34a" strokeWidth="3" transform="rotate(-20)" />
            <ellipse cx="0" cy="-18" rx="22" ry="38" fill="none" stroke="#16a34a" strokeWidth="3" transform="rotate(20)" />
            <text x="0" y="8" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="28" fill="#16a34a">S</text>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#siraba-wm-vfaq)" />
    </svg>
  </div>
);

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-emerald-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
            {index}
          </span>
          <span className="font-heading font-bold text-primary text-sm md:text-base">
            {question}
          </span>
        </div>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-emerald-200 flex items-center justify-center text-emerald-600 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-emerald-50">
          <p className="text-text-secondary leading-relaxed font-light text-sm pl-11">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const VendorFAQ = () => {
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
            Vendor FAQ
          </h1>
          <p className="text-text-secondary text-sm uppercase tracking-[0.2em]">
            Sell on Siraba Organic
          </p>
        </div>

        {/* How to Start — Quick Steps */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 p-6 mb-10">
          <h2 className="font-heading text-lg font-bold text-primary mb-5">
            How to Start Selling on Siraba Organic
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            {onboardingSteps.map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-primary">{step}</span>
                </div>
                {i < onboardingSteps.length - 1 && (
                  <ArrowRight size={14} className="text-emerald-300 hidden sm:block flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-12">
          {faqs.map((item, i) => (
            <FAQItem key={i} index={i + 1} question={item.q} answer={item.a} />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-lg text-center">
          <h3 className="font-heading text-xl font-bold mb-2">
            Ready to apply as a vendor?
          </h3>
          <p className="text-emerald-100 text-sm mb-6">
            Contact us with the subject line{" "}
            <span className="font-semibold text-white">
              "Vendor Registration"
            </span>{" "}
            and include your company details, product category, and certification information.
          </p>
          <a
            href="mailto:info@sirabaorganic.com?subject=Vendor%20Registration%20%E2%80%93%20Siraba%20Organic"
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

export default VendorFAQ;