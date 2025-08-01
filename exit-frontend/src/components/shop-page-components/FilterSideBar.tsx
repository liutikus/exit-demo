import type { Category, FilterGroup, PriceRange, StockCount } from "../../types/types"
import CategoryCard from "./CategoryCard"
import DetailedFiltersGrid from "./DetailedFiltersGrid"

type FilterSideBarProps ={
    categories: Category[] | null
    isFiltersOpen: boolean
    filtersData: FilterGroup[] | null
    priceRange:PriceRange | null
    selectedPriceRange: [number, number]
    stockCounts: StockCount[] | null
    onPriceChange:(range:[number, number])=>void;
    onFilterChange: (key:string, value:string)=>void;
    handleCategoryChange: (slug: string[]) => void
}

const FilterSideBar = ({filtersData,onFilterChange,handleCategoryChange, stockCounts, selectedPriceRange, priceRange, categories, isFiltersOpen, onPriceChange} : FilterSideBarProps) => {


  return (
    <div className={`${isFiltersOpen ? "pr-5 h-full" : "pr-0 h-0"}`}>
      <div
       className={`overflow-hidden py-1 transition-all  duration-500 ease-in-out transform ${
          isFiltersOpen ? " opacity-100 translate-y-0" : "max-w-0 opacity-0 -translate-y-2"
        }`}
      >
        {categories?.map(({title, id, slug, subCategories, })=>(
            <div
            key={id}
            >
                    <CategoryCard 
                    categoryId={id}
                    title={title} 
                    categorySlug={slug} 
                    subCategories={subCategories}
                    handleCategoryChange={handleCategoryChange}
                    />  
            </div>
        ))}
        <div>
          <DetailedFiltersGrid  
          priceRange={priceRange}
           onPriceChange={onPriceChange}
        filtersData={filtersData}
                selectedPriceRange={selectedPriceRange}
                onFilterChange={onFilterChange}
                stockCounts={stockCounts}
        />

         
           
        </div>
      </div>
    </div>
  )
}

export default FilterSideBar
