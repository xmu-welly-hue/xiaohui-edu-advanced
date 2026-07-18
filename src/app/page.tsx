import { HeroSection } from '@/components/course/hero-section';
import { CourseOutline } from '@/components/course/course-outline';
import { ModulesSection } from '@/components/course/modules-section';
import { FeaturesSection } from '@/components/course/features-section';
import { PricingSection } from '@/components/course/pricing-section';
import { ContactSection } from '@/components/course/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <HeroSection />
      <FeaturesSection />
      <CourseOutline />
      <ModulesSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
