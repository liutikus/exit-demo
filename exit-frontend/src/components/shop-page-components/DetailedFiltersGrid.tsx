import { stockOptions } from "../../data/data"
import type { FilterGroup, PriceRange, StockCount } from "../../types/types"
import FilterCard from "./FilterCard"
import PriceSlider from "./PriceSlider"

type DetailedFiltersGridProps ={
    filtersData: FilterGroup[] | null
    priceRange:PriceRange | null
    selectedPriceRange: [number, number]
    stockCounts: StockCount[] | null
    onPriceChange:(range:[number, number])=>void;
    onFilterChange:(key:string, value:string)=>void;


}

const DetailedFiltersGrid = ({filtersData,selectedPriceRange,stockCounts, onFilterChange, onPriceChange, priceRange} : DetailedFiltersGridProps) => {
  return (
    <div>
        <FilterCard label="Disponibilitate" hasSubCard={true}>
            {stockOptions.map(({title, value,slug})=>(
                <div
                key={value}
                className="flex gap-2 py-0.5 items-center justify-between"
                >
                    <div className="flex items-center gap-2">

                    <input 
                    type="checkbox"
                    value={slug}
                    id={slug+value}
                    onChange={()=>onFilterChange(slug,value)}
                    />
                    <p className="opacity-70">{title}</p>
                    </div>
                        <p className="py-1.5 rounded-md px-3 border-1" >
                            
                           { stockCounts?.map(({is_in_stock, count})=>(
                            <span>
                                {is_in_stock.toString() === value ? count : null}

                            </span>
                            ))
                         } 
                            </p>
                </div>
            ))}
        </FilterCard>
        <FilterCard label="Preț" hasSubCard={true} >
            <PriceSlider 
            priceRange={priceRange}
            onPriceChange={onPriceChange}
            selectedPriceRange={selectedPriceRange}
             
             />
        </FilterCard>
        {filtersData?.map(({key,title, item})=>(
            <div
            key={key}
            >
            <FilterCard hasSubCard={true} label={title}>
                {item?.map(({id,name,products, hex_code,slug})=>(
                    <div
                    key={id}
                className="flex gap-2 py-0.5 items-center"
                    >
                         <input 
                         name={slug}
                         id={slug+id}
                    type="checkbox"
                    value={slug}
                    onChange={()=>onFilterChange(key,slug)}
                    
                    />
                   
                    <label 
                    htmlFor={slug+id}
                    className="flex items-center gap-2 w-full">
                        {key === "colors" && (
                            <div
                             className="p-2 rounded-full border-1 border-[var(--color-light-black)]"
                             style={{ backgroundColor: hex_code }}
                             ></div>
                        )}
                        <div className="opacity-70 flex items-center justify-between w-full">
                        <p>{name}</p> 
                        <p className="py-1.5 rounded-md px-3 border-1" >{products.length}</p>
                         </div>
                        

                    </label>
                    </div>
                ))}
            </FilterCard>
            </div>
        ))}
        
    </div>
  )
}

export default DetailedFiltersGrid
