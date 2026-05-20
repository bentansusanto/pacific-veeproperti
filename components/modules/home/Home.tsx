import CTASection from './CTASection'
import FeaturedListings from './FeaturedListings'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import WhyChooseUs from './WhyChooseUs'

const Homepage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedListings />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  )
}

export default Homepage
