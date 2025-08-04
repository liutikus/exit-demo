import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { 
  fetchNewProductsByType, 
  fetchProductById, 
  fetchProductsBySpecial, 
  fetchProductVideo 
} from "../../api/strapi";
import NotFound from "../../pages/NotFound";
import LinkArrow from "../../assets/icons/link-arrow.svg?react";
import PaddingContainer from "../PaddingContainer";
import type { Product, VideoData } from "../../types/types";
import ProductHeroCarousel from "./ProductHeroCarousel";
import ProductPriceDetails from "./ProductPriceDetails";
import Specifications from "./Specifications";
import BestForYouProducts from "./BestForYouProducts";
import ProductsCarousel from "../ProductsCarousel";
import LoadingSpinner from "../LoadingSpinner"; // ✅ use your spinner

const MainProductSection = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [video, setVideo] = useState<VideoData | null>(null);
  const [error, setError] = useState("");

  const [bestProducts, setBestProducts] = useState<Product[] | null>(null);
  const [newProducts, setNewProducts] = useState<Product[] | null>(null);
  const [onSaleProducts, setOnSaleProducts] = useState<Product[] | null>(null);

  const [loadingBest, setLoadingBest] = useState(false);
  const [loadingNew, setLoadingNew] = useState(false);
  const [loadingSale, setLoadingSale] = useState(false);

  useEffect(() => {
    if (!product?.product_type?.slug) return;
    setLoadingBest(true);
    fetchNewProductsByType(product.product_type.slug)
      .then((data) => setBestProducts(data))
      .catch((err) => console.log(err.message))
      .finally(() => setLoadingBest(false));
  }, [product?.product_type?.slug]);

  useEffect(() => {
    setLoadingNew(true);
    fetchProductsBySpecial("is_new")
      .then(setNewProducts)
      .catch((err) => console.log(err.message))
      .finally(() => setLoadingNew(false));
  }, []);

  useEffect(() => {
    setLoadingSale(true);
    fetchProductsBySpecial("is_on_sale")
      .then(setOnSaleProducts)
      .catch((err) => console.log(err.message))
      .finally(() => setLoadingSale(false));
  }, []);

  useEffect(() => {
    if (!id) return;
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);

  useEffect(() => {
    fetchProductVideo()
      .then(setVideo)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <NotFound />;

  if (!product || !video) return <div className="flex justify-center py-10"><LoadingSpinner /></div>;

  return (
    <div className="py-15 bg-[#F5F5F7] text-[var(--color-black)]">
      <PaddingContainer>
        <div className="flex gap-4 items-baseline">
          <Link to="/">Home</Link>
          <LinkArrow className="h-[10px] w-auto" />
          <Link to="/shop">Shop</Link>
          <LinkArrow className="h-[10px] w-auto" />
          <h4 className="font-bold cursor-default">{product.title}</h4>
        </div>

        <div className="lg:flex pt-4 pb-20 gap-10">
          <div className="lg:w-[65%]">
            <ProductHeroCarousel images={product.images} />
          </div>
          <div className="lg:w-[35%]">
            <ProductPriceDetails product={product} video={video} />
          </div>
        </div>
      </PaddingContainer>

      {product.product_details[0] && <Specifications product={product} />}

      {loadingBest ? (
        <div className="flex justify-center py-10"><LoadingSpinner /></div>
      ) : bestProducts && (
        <BestForYouProducts products={bestProducts} />
      )}

      {loadingNew ? (
        <div className="flex justify-center py-10"><LoadingSpinner /></div>
      ) : newProducts && (
        <ProductsCarousel title="Recente" products={newProducts} isDark={false} />
      )}

      {loadingSale ? (
        <div className="flex justify-center py-10"><LoadingSpinner /></div>
      ) : onSaleProducts && (
        <ProductsCarousel title="Reduceri" products={onSaleProducts} isDark={false} />
      )}
    </div>
  );
};

export default MainProductSection;
