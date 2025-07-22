import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchNewProductsByType, fetchProductById, fetchProductVideo } from "../../api/strapi";
import NotFound from "../../pages/NotFound";
import Loading from "../../pages/Loading";
import LinkArrow from "../../assets/icons/link-arrow.svg?react"
import PaddingContainer from "../PaddingContainer";
import type { Product, VideoData } from "../../types/types";
import ProductHeroCarousel from "./ProductHeroCarousel";
import ProductPriceDetails from "./ProductPriceDetails";
import Specifications from "./Specifications";
import BestForYouProducts from "./BestForYouProducts";

const MainProductSection = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [video, setVideo] = useState<VideoData | null>(null)
  const [error, setError] = useState("");
  const [bestProducts, setBestProducts] = useState<Product[] | null>(null)

  useEffect(()=>{
    fetchNewProductsByType(product?.product_type.slug)
           .then((data) => setBestProducts(data))
            .catch((err) => console.log(err.message));
  },[product?.product_type?.slug])

  useEffect(() => {
    if (!id) return;

    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);

  useEffect(()=>{
    fetchProductVideo()
        .then(setVideo)
        .catch((err) => setError(err.message))
  },[])

  if (error) return <NotFound/>;

  if (!product) return <Loading/>;
  if (!video) return <Loading/>;

console.log(bestProducts)
  return (
    <div className="py-15 bg-[#F5F5F7] text-[var(--color-black)]">
        <PaddingContainer>

            <div>
      <div className="flex gap-4 items-baseline">
        <Link
        to="/"
        >Home
        </Link>
        <LinkArrow className="h-[10px] w-auto"/>
           <Link
        to="/shop"
        >Shop
        </Link>
        <LinkArrow className="h-[10px] w-auto"/>
        <h4 className="font-bold cursor-default">{product?.title}</h4>
        </div>
        <div className="flex pt-4 pb-20 gap-10 ">
            <div className="w-[65%]">
        <ProductHeroCarousel images={product?.images}/>

            </div>
            <div className="w-[35%]">

        <ProductPriceDetails product={product} video={video}/>
            </div>
        </div>

            </div>
        </PaddingContainer>

            <Specifications product={product}/>
            <BestForYouProducts products={bestProducts} />


    </div>
  )
}

export default MainProductSection
