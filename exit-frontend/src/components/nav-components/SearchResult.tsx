import { Link } from "react-router"
import { BaseURL } from "../../api/strapi"
import type { Product } from "../../types/types"
import PaddingContainer from "../PaddingContainer"
import { productPath } from "../../data/data"
import LoadingSpinner from "../LoadingSpinner"


type SearchResultProps = {
    products: Product[] | null,
    loading:boolean
    isOpen:boolean
    searchValue:string
}

const SearchResult = ({isOpen,searchValue,products, loading} : SearchResultProps) => {

  return (
      <div className="absolute w-full z-99">
        <PaddingContainer>
            <div className="bg-[var(--color-bg-white)] dark:bg-black rounded-b-xl shadow-md">
      {isOpen && (
        <div> 
          {loading ? (
          <div>
            <LoadingSpinner/>
          </div>
        ): products && products.length > 0 ? (
          products?.map(({id,documentId,start_price,title, mainImage, product_type}) => (
               <Link
                key={id}
               to={productPath+ "/" + documentId} 
                >
                <div
                className="w-full border-b-1 p-4 flex items-center justify-between  border-[rgba(var(--color-gray-rgb),0.1)]"
                >
                    <div className="flex gap-6 items-center">

                     <div className="w-20 h-20 overflow-hidden">
      <img
        src={BaseURL + mainImage.url}
        alt={title}
        className="object-cover w-full h-full rounded"
      />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">{title}</h4>
                        <p>{product_type.name}</p>
                    </div>
                    </div>
                    <div className="font-bold text-lg">De la {start_price.toLocaleString()} Lei</div>
                </div>
                </Link>
          ))
        ) : (
          <p className="text-center w-full text-xl font-bold py-5">No products found</p>
        )}
            <div 
            className="text-center p-2 bg-[var(--color-bg-white)] dark:bg-black rounded-b-xl shadow-md"
            >
                <Link
                to={`/shop?search=${searchValue}`}
                >
                <button className={`cursor-pointer font-bold underline text-[var(--color-accent)] ${ products && products.length > 0 ? "" : "hidden"}`}>
                    Arată toate produsele
                </button>
                </Link>
            </div>
        </div>
      )}

            </div>
    </PaddingContainer>
    </div>

  )
}

export default SearchResult
