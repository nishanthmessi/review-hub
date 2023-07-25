import AboutSection from './components/AboutSection'
import BrandSection from './components/BrandSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import ProductDetails from './components/ProductDetails'
import ProductGallery from './components/ProductGallery'
import YoutubeSection from './components/YoutubeSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductDetails />
      <ProductGallery />
      <YoutubeSection />
      <AboutSection />
      <BrandSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default App
