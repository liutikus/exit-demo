import { Link } from "react-router"
import type { Product } from "../../types/types"
import { BaseURL } from "../../api/strapi"
import ColoredBtn from "../buttons/ColoredBtn"
import ArrowLink from "../../assets/icons/link-arrow.svg?react"

type BestForYouCardProps = {
    product: Product
}

const BestForYouCard = ({product}: BestForYouCardProps) => {
  return (
    <div>
        <div className="pt-15 border-b-1 border-[rgba(var(--color-gray-rgb),0.26)] pb-15 flex flex-col justify-center text-center gap-y-4 flex-grow w-[320px]"> 
        <Link to={`/product/${product.documentId}`}>
            <div className="h-full w-full">
            <img
                className="h-full w-full object-cover"
                src={BaseURL + product.mainImage.url}
                alt={product.title}
            />
            </div>
        </Link>

        <div className="flex items-center w-full gap-2 justify-center py-4">
            {product.colors.map(({ hex_code, id }) => (
            <div
                key={id}
                style={{ backgroundColor: hex_code }}
                className="p-2 rounded-full"
            />
            ))}
        </div>

        <p className="font-bold text-[var(--color-accent)]">New</p>

        <h3 className="text-3xl  font-bold leading-tight line-clamp-2 break-words">
            {product.title}
        </h3>
        <h4>De la {product.start_price} Lei </h4>
        <Link
        to={`/product/${product.documentId}`}
        >
            <ColoredBtn text={"Afla mai multe"} isTextBold={false}/>
        
        </Link>
        <Link
            to={`/product/${product.documentId}`}
            className="text-center w-full flex items-baseline gap-4 opacity-90 pt-2 justify-center"
        ><p>Vezi Preturile </p>
        <ArrowLink className="h-3 w-auto"/>
        </Link>
        </div>
        <div className="pt-15 flex flex-col jsutify-center gap-y-10">
            {product.product_features.map(({icon, description},index)=>(
                <div
                key={index}
                className="flex flex-col justify-center items-center "
                >
                    <div className="w-15 h-auto ">
                    <img 
                    
                    src={BaseURL + icon.url} alt="Icon" />

                    </div>
                    <div className="flex flex-col gap-y-2 items-center">
                        {description.map(({description},index)=>(
                            <p key={index}>{description}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    </div>


  )
}

export default BestForYouCard
