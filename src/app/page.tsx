import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoExplainer from "@/components/VideoExplainer";
import StressorsSection from "@/components/StressorsSection";
import BenefitSection from "@/components/BenefitSection";
import AssessmentProcess from "@/components/AssessmentProcess";
import TeamSection from "@/components/TeamSection";
import DrRitterSection from "@/components/DrRitterSection";
import ProjectGallery from "@/components/ProjectGallery";
import VideosSection from "@/components/VideosSection";
import Testimonials from "@/components/Testimonials";
import EducationHub from "@/components/EducationHub";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description:
    "Healthy Home EMF Assessments, Shielding, and Grounding for Florida families.",
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "EMF Assessment & Shielding",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: site.areaServed,
  description: site.description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteLd, serviceLd, faqLd]} />
      <Navbar />
      <main id="main">
        <Hero />
        <VideoExplainer />
        <StressorsSection />
        <BenefitSection />
        <AssessmentProcess />
        <TeamSection />
        <DrRitterSection />
        <ProjectGallery />
        <VideosSection />
        <Testimonials />
        <EducationHub />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
