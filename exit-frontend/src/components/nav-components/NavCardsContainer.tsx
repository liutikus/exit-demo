import type { Product } from "../../types/types";
import { BaseURL } from "../../api/strapi";
import SpecialOfferIcons from "../card-components/SpecialOfferIcons";
import { Link } from "react-router";
import PaddingContainer from "../PaddingContainer";
import LoadingSpinner from "../LoadingSpinner";

type NavCardsContainerProps = {
  isHovered: boolean;
  products: Product[];
  loading: boolean;
  setIsHovered: (val: boolean) => void;
};

const NavCardsContainer = ({ products, loading, isHovered, setIsHovered }: NavCardsContainerProps) => {
  return (
    <div
      className={`${isHovered ? "absolute" : "hidden"} top-full dark:bg-black bg-white left-0 w-full z-50 shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        maxHeight: "80vh",  
        overflowY: "auto", 
      }}
    >
        <PaddingContainer>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(205px,_1fr))]    pt-5 pb-5 gap-6">
        {loading ? (
          <div>
            <LoadingSpinner/>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link to={`/product/${product.documentId}`}>
            <div
              key={product.id}
              className="relative flex flex-col justify-between items-center text-center 
                         border px-4 py-6 rounded-xl border-[rgba(var(--color-gray-rgb),0.26)] 
                         w-[200px] h-[250px] bg-white dark:bg-black"
            >
              <div className="flex justify-center items-center h-[180px] w-full overflow-hidden">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={BaseURL + product.mainImage.url}
                  alt={product.title}
                />
              </div>

              <h2 className="font-bold text-sm line-clamp-2 mt-3">{product.title}</h2>

              <SpecialOfferIcons product={product} isForCard={true} />
            </div>
            
            </Link>
          ))
        ) : (
          <p className="text-center w-full text-xl font-bold ">No products found</p>
        )}
      </div>

        </PaddingContainer>
    </div>
  );
};

export default NavCardsContainer;
