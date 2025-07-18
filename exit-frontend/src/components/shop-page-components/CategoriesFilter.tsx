import type { ProductsData } from "../../types/types"
import SimpleBtn from "../buttons/SimpleBtn"
import FilterIcon from "../../assets/icons/filter-icon.svg?react"
import SortComponent from "./SortComponent"


type CategoriesFilterProps = {
    productsData: ProductsData | null
    isFiltersOpen:boolean
    currentSort: string,
    handleOpenFilter: ()=>void
    handleSort: (e: React.ChangeEvent<HTMLSelectElement>)=>void
}

const CategoriesFilter = ({productsData, isFiltersOpen, handleOpenFilter, handleSort, currentSort}: CategoriesFilterProps) => {
  return (
     <div className="flex flex-col md:flex-row  md:items-center gap-2 md:gap-6 ">
                    <p>{productsData?.metaPagination.total} Produse</p>
                    <SimpleBtn isSquare={false}>
                        <div
                         className="flex gap-2 items-center"
                         onClick={handleOpenFilter}
                         >
                            <FilterIcon className="w-auto h-[14px]"/>
                            <p>{isFiltersOpen ? "Hide Filters" : "Open Filters"}</p>
                        </div>
                    </SimpleBtn>
                    <SortComponent 
                    currentSort={currentSort}
                     handleSort={handleSort}/>
                </div>
  )
}

export default CategoriesFilter
