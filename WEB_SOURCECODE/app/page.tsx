import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CreditDecisionProblem from "@/components/home/CreditDecisionProblem";
import BusinessImpact from "@/components/home/BusinessImpact";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#07111B] overflow-x-hidden">
      <Header />
      <Hero />
      <CreditDecisionProblem />
      <BusinessImpact />
      <CallToAction />
      <Footer />
    </main>
  );
}
