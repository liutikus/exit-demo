import NavBar from "../components/nav-components/NavBar"
import MainHero from "../components/main-page-components/MainHero"
import ServiceSection from "../components/main-page-components/ServiceSection"
import ProductsCarousel from "../components/ProductsCarousel"
import { useEffect, useState } from "react"
import { fetchBestSellingProducts, fetchTopProducts } from "../api/strapi"
import type { Product } from "../types/types"
import VideoSection from "../components/main-page-components/VideoSection"
import CategoriesSection from "../components/main-page-components/CategoriesSection"
import FaqSection from "../components/FaqSection"
import Footer from "../components/Footer"
import LoadingSpinner from "../components/LoadingSpinner" // 👈 import spinner

const Home = () => {
  const [bestSelling, setBestSelling] = useState<Product[] | null>(null)
  const [topProducts, setTopProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [best, top] = await Promise.all([
          fetchBestSellingProducts(),
          fetchTopProducts(),
        ])
        setBestSelling(best)
        setTopProducts(top)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false) // 👈 stop loading after data is fetched
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--color-light-gray)]">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-light-gray)]">
      <NavBar isDark={false} />
      <MainHero />
      <ServiceSection />
      <ProductsCarousel products={bestSelling} isDark={false} title="Cele mai vândute produse" />
      <ProductsCarousel products={topProducts} isDark={true} title="Top Produse" />
      <VideoSection />
      <CategoriesSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Home
