import AboutSection from './components/AboutSection'
import BuySection from './components/BuySection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import ProductDetails from './components/ProductDetails'
import YoutubeSection from './components/YoutubeSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductDetails />
      <YoutubeSection />
      <AboutSection />
      <BuySection />
      <NewsletterSection />
    </div>
  )
}

export default App
