import { useEffect } from 'react';

import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import AppBanner from "./Components/AppBanner/AppBanner";
import Footer from "./Components/Footer/Footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: 'ease-in-cubic'
    })
  }, [])

  return (
    <main
      className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  )
}

export default App