// app/page.tsx
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import ProductSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import SocialMediaFloat from '@/components/SocialMediaFloat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SocialMediaFloat />
      <ServicesSection />
      <ProductSection />  
      <NewsSection />
      <Footer />
    </div>
  );
}