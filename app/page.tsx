
// import Benefits from "@/components/Benefits";
// import CTASection from "@/components/CTASection";
// import CustomerReviews from "@/components/CustomerReviews";
// import FAQSection from "@/components/FAQsection";
// import Hero from "@/components/Hero";
// import PreparationSection from "@/components/PreparationSection";
// import ProdDetailsList from "@/components/ProdDetailsList";
// import ProductFeatures from "@/components/ProductFeatures";
// import ShopNowButton from "@/components/ShopNowButton";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <ProductFeatures />
//       <PreparationSection />
//       <CustomerReviews />
//       <Benefits />
    
//       <ProdDetailsList />
//       <FAQSection />
    
//      <CTASection />
//     </>
//   );
// }

import Head from 'next/head';
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQsection";
import Hero from "@/components/Hero";
import PreparationSection from "@/components/PreparationSection";
import ProdDetailsList from "@/components/ProdDetailsList";
import ProductFeatures from "@/components/ProductFeatures";
import ShopNowButton from "@/components/ShopNowButton";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Nutrimix - Natural & Healthy Nutrition for Your Family | Shop Now</title>
        <meta
          name="description"
          content="Discover Nutrimix, your perfect blend of natural and nutritious food. Explore product features, preparation tips, customer reviews, FAQs, and exclusive benefits. Shop now and transform your health with Nutrimix!"
        />
        <meta
          name="keywords"
          content="Roshini's Nutrimix, healthy nutrition, natural food, nutritious products, shop Nutrimix, preparation tips, customer reviews, health benefits, FAQ, buy Nutrimix online"
        />
        <meta name="author" content="Nutrimix" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Roshin's Nutrimix - Natural & Healthy Nutrition for Your Family | Shop Now" />
        <meta
          property="og:description"
          content="Discover Nutrimix, your perfect blend of natural and nutritious food. Explore product features, preparation tips, customer reviews, FAQs, and exclusive benefits. Shop now and transform your health with Nutrimix!"
        />
        <meta property="og:image" content="/images/nutrimix-feature-image.jpg" />
        <meta property="og:url" content="https://roshinis.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrimix - Natural & Healthy Nutrition for Your Family | Shop Now" />
        <meta
          name="twitter:description"
          content="Discover Nutrimix, your perfect blend of natural and nutritious food. Explore product features, preparation tips, customer reviews, FAQs, and exclusive benefits. Shop now and transform your health with Nutrimix!"
        /> */}
        {/* <meta name="twitter:image" content="/images/nutrimix-feature-image.jpg" /> */}

        {/* Structured Data */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Nutrimix",
              image: "/images/nutrimix-feature-image.jpg",
              description:
                "Nutrimix is a natural, healthy, and nutritious product designed for your family's well-being. Perfect for all ages.",
              brand: {
                "@type": "Brand",
                name: "Nutrimix",
              },
              offers: {
                "@type": "Offer",
                price: "500",
                priceCurrency: "INR",
                availability: "InStock",
                url: "https://yourdomain.com/shop",
              },
              review: {
                "@type": "Review",
                author: "Jane Doe",
                datePublished: "2025-01-27",
                description:
                  "Nutrimix is amazing! A game-changer for my family's health. Highly recommended.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
              },
            }),
          }}
        /> */}
      </Head>

      {/* Page Content */}
      <Hero />
      <ProductFeatures />
      <PreparationSection />
      <CustomerReviews />
      <Benefits />
      <ProdDetailsList />
      <FAQSection />
      <CTASection />

      {/* Footer CTA */}
     <Footer/>
    </>
  );
}