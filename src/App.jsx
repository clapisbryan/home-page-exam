
import CarouselImg from "./components/CarouselImg/CarouselImg"
import Contacts from "./components/Contacts/Contacts"
import Hero from "./components/Hero/Hero"
import MainFooter from "./components/MainFooter/MainFooter"
import Navbar from "./components/MainNavbar/MainNavbar"
import ProductCard from "./components/ProductCard/ProductCard"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ProductCard />
      <CarouselImg />
      <Contacts />
      <MainFooter />
    </>
  )
}

export default App
