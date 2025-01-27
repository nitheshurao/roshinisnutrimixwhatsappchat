
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQsection";
import Hero from "@/components/Hero";
import PreparationSection from "@/components/PreparationSection";
import ProdDetailsList from "@/components/ProdDetailsList";
import ProductFeatures from "@/components/ProductFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductFeatures />
      <PreparationSection />
      <CustomerReviews />
      <Benefits />
      <CTASection />
      <ProdDetailsList />
      <FAQSection />
    </>
  );
}
