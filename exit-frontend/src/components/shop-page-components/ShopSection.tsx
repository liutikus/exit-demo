import { useEffect, useState } from "react"
import PaddingContainer from "../PaddingContainer"
import type { Category, FilterGroup, FiltredData, Product, ProductsData } from "../../types/types"
import {  fetchBrands, fetchCategories, fetchColors, fetchGadgetType, fetchProductsData, fetchSizes } from "../../api/strapi"
import SimpleBtn from "../buttons/SimpleBtn"
import FilterIcon from "../../assets/icons/filter-icon.svg?react"
import ProductCard from "../card-components/ProductCard"
import { allowedCategories, pageSize } from "../../data/data"
import {  useSearchParams } from "react-router"
import PaginationBtns from "./PaginationBtns"
import SortComponent from "./SortComponent"
import FilterSideBar from "./FilterSideBar"

const ShopSection = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const sortParam = searchParams.get("sort") ||"title:asc"
  
    const [currentSort, setCurrentSort] = useState(sortParam)
    const [currentPage, setCurrentPage] = useState(pageParam);
    const [productsData, setProductsData] = useState<ProductsData | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);
    const [categories, setCategories] = useState<Category[] | null>(null)
    const [isFiltersOpen, setIsFiltersOpen] = useState(true)
    const [sizes, setSizes] = useState<FiltredData[] | null>(null)
    const [colors, setColors] = useState<FiltredData[] | null>(null)
    const [brands, setBrands] = useState<FiltredData[] | null>(null)
    const [gadgetTypes, setGadgetTypes] = useState<FiltredData[] | null>(null)
    const [filtersData,setFiltersData] = useState<FilterGroup[] | null>(null)
    

 useEffect(() => {
  const fetchFilters = async () => {
    try {   
      const [sizes, colors, brands, gadgetTypes] = await Promise.all([
        fetchSizes(),
        fetchColors(),
        fetchBrands(),
        fetchGadgetType()
      ]);
      setSizes(sizes);
      setColors(colors);
      setBrands(brands);
      setGadgetTypes(gadgetTypes);

      setFiltersData([
        {key:"sizes", item:sizes},
        {key:"colors", item:colors},
        {key:"brands", item:brands},
        {key:"gadgetTypes", item:gadgetTypes},
      ])
    } catch (err) {
      console.error(err);
    }
};

fetchFilters();
}, []);
console.log(filtersData)

useEffect(() => {
  const newPage = Number(searchParams.get("page")) || 1;
  const newSort = searchParams.get("sort") || "title:asc";

  setCurrentPage(newPage);
  setCurrentSort(newSort);
}, [searchParams]);


  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  useEffect(() => {

    fetchProductsData(currentPage, pageSize, currentSort)
      .then((data) => {
        setProductsData(data);
        setProducts(data.products);
      })
      .catch(console.error);
  }, [currentPage, currentSort]);

  useEffect(()=>{
    fetchCategories()
        .then(data=>setCategories(data.filter((category : Category)=> allowedCategories.includes(category.slug))))
        .catch(console.error)
  },[])

 const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newSort = e.target.value;
  setSearchParams(params => {
    params.set("sort", newSort);
    params.set("page", "1"); // reset to page 1 when sorting
    return params;
  });
};

const handlePageChange = (page: number) => {
  setSearchParams(params => {
    params.set("page", page.toString());
    params.set("sort", currentSort);
    return params;
  });
};

  return (
    <section>
        <PaddingContainer>
            <div className="flex">
            <div className="pr-15">
                <FilterSideBar 
                categories={categories}
                isFiltersOpen={isFiltersOpen}
                filtersData={filtersData}
                />
            </div>

            <div>
                <div className="flex items-center gap-6">
                    <p>{productsData?.metaPagination.total} Produse</p>
                    <SimpleBtn isSquare={false}>
                        <div
                         className="flex gap-2 items-center"
                         onClick={()=> setIsFiltersOpen(!isFiltersOpen)}
                         >
                            <FilterIcon className="w-auto h-[14px]"/>
                            <p>{isFiltersOpen ? "Hide Filters" : "Open Filters"}</p>
                        </div>
                    </SimpleBtn>
                    <SortComponent currentSort={currentSort} handleSort={handleSort}/>
                </div>
                <div className="py-10">
                    <div className="flex flex-wrap gap-6 pb-6">
                        {products?.map((product)=>(
                            <div
                            key={product.id}
                            >
                            <ProductCard product={product} isDark={false}/>
                            </div>
                        ))}
                    </div>
                    <PaginationBtns productsData={productsData} currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
            </div>
        </PaddingContainer>
    </section>
  )
}

export default ShopSection