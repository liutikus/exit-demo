import type { Product } from "../../types/types"
import BestForYouCard from "../card-components/BestForYouCard"

type BestForYouProductsProps = {
    products: Product[] | null
}

const BestForYouProducts = ({products}: BestForYouProductsProps) => {
  return (
    <div className="py-30">
        <h4 className="text-center text-4xl font-bold pb-10">Cel mai bun pentru tine</h4>
        <div className="sm:flex-row flex flex-col items-center sm:items-baseline justify-around">
            {products?.map((product,index)=>(
                <>
                 <div
                key={index}
                >
                    <BestForYouCard product={product}/>
                </div>
                {index === 0 && (

                 <div
                key={index}
                >
                    <BestForYouCard product={product}/>
                </div>
                )}
                </>
            ))} 
        </div>
    </div>
  )
}

export default BestForYouProducts
