import type { Category, FilterGroup } from "../../types/types"
import CategoryCard from "./CategoryCard"
import DetailedFiltersGrid from "./DetailedFiltersGrid"
import FilterCard from "./FilterCard"

type FilterSideBarProps ={
    categories: Category[] | null
    isFiltersOpen: boolean
    filtersData: FilterGroup[] | null
}

const FilterSideBar = ({filtersData, categories, isFiltersOpen} : FilterSideBarProps) => {



  return (
    <div>
      <div
       className={`overflow-hidden py-1 transition-all  duration-500 ease-in-out transform ${
          isFiltersOpen ? " opacity-100 translate-y-0" : "max-w-0 opacity-0 -translate-y-2"
        }`}
      >
        {categories?.map(({title, id, slug, subCategories})=>(
            <div
            key={id}
            >
                    <CategoryCard title={title} slug={slug} subCategories={subCategories} />  
            </div>
        ))}
        <div>
          <DetailedFiltersGrid filtersData={filtersData}/>
         
           
        </div>
      </div>
    </div>
  )
}

export default FilterSideBar
