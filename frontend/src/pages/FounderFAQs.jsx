import React, { useEffect } from "react";

const FounderFAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h1 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
          Founder & Branding FAQs
        </h1>
        <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-2">
          Siraba Organic
        </p>
        <div className="space-y-6 text-text-secondary leading-relaxed font-light mt-8">
          <div className="space-y-3">
            <h2 className="font-heading text-lg md:text-primary font-semibold">
              Who is the founder of Siraba Organic?
            </h2>
            <p>Siraba Organic was founded by Rajesh Kumar Thakur with the vision of bringing authentic, high-quality organic products like saffron and superfoods directly from pristine farms to health-conscious consumers.</p>
          </div>
          <div className="space-y-3 mt-4">
            <h2 className="font-heading text-lg md:text-primary font-semibold">
              What does the name "Siraba" signify?
            </h2>
            <p>The name stands for purity, trust, and a deep-rooted connection to traditional farming methods that prioritize sustainability and quality.</p>
          </div>
          <div className="space-y-3 mt-4">
            <h2 className="font-heading text-lg md:text-primary font-semibold">
              How does the branding reflect its mission?
            </h2>
            <p>Our branding is minimalist yet premium, reflecting our commitment to transparency, pure ingredients, and no artificial additives. The elegant design mirrors the premium quality of the products inside.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderFAQs;
