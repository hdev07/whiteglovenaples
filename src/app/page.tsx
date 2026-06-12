import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedInterview from "@/components/FeaturedInterview";
import StressorsSection from "@/components/StressorsSection";
import BenefitSection from "@/components/BenefitSection";
import AssessmentProcess from "@/components/AssessmentProcess";
import TeamSection from "@/components/TeamSection";
import DrRitterSection from "@/components/DrRitterSection";
import ProjectGallery from "@/components/ProjectGallery";
import VideosSection from "@/components/VideosSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedInterview />
        <StressorsSection />
        <BenefitSection />
        <AssessmentProcess />
        <TeamSection />
        <DrRitterSection />
        <ProjectGallery />
        <VideosSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
