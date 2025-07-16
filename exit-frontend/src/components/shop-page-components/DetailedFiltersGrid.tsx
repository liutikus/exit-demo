import { stockOptions } from "../../data/data"
import type { FilterGroup } from "../../types/types"
import FilterCard from "./FilterCard"
import PriceSlider from "./PriceSlider"

type DetailedFiltersGridProps ={
    filtersData: FilterGroup[] | null
}

const DetailedFiltersGrid = ({filtersData} : DetailedFiltersGridProps) => {
  return (
    <div>
        <FilterCard label="Disponibilitate" hasSubCard={true}>
            {stockOptions.map(({title, value})=>(
                <div
                key={value}
                className="flex gap-2 py-0.5 items-center"
                >
                    <input 
                    type="checkbox"
                    value={value}
                    />
                    <p className="opacity-70">{title}</p>
                </div>
            ))}
        </FilterCard>
        <FilterCard label="Preț" hasSubCard={true}>
            <PriceSlider/>
        </FilterCard>
    </div>
  )
}

export default DetailedFiltersGrid
