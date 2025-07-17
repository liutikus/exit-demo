import { useEffect, useState } from "react"
import PaddingContainer from "../PaddingContainer"
import type { Category, FilterGroup, FiltredData, PriceRange, Product, ProductsData, SelectedFilters, StockCount } from "../../types/types"
import {  fetchBrands, fetchCategories, fetchColors, fetchProductType, fetchPriceRange, fetchProductsData, fetchSizes, fetchStockCounts } from "../../api/strapi"
import SimpleBtn from "../buttons/SimpleBtn"
import FilterIcon from "../../assets/icons/filter-icon.svg?react"
import ProductCard from "../card-components/ProductCard"
import { allowedCategories, pageSize } from "../../data/data"
import {  useSearchParams } from "react-router"
import PaginationBtns from "./PaginationBtns"
import SortComponent from "./SortComponent"
import FilterSideBar from "./FilterSideBar"
import { useDebounce } from "../../data/useDebounce"
import ProductGrid from "./ProductGrid"

const ShopSection = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const sortParam = searchParams.get("sort") ||"title:asc"
  const priceMinParam = Number(searchParams.get("minPrice")) || 0;
  const priceMaxParam = Number(searchParams.get("maxPrice")) || 100000;

  
    const [currentSort, setCurrentSort] = useState(sortParam)
    const [currentPage, setCurrentPage] = useState(pageParam);
    const [productsData, setProductsData] = useState<ProductsData | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);
    const [categories, setCategories] = useState<Category[] | null>(null)
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [sizes, setSizes] = useState<FiltredData[] | null>(null)
    const [colors, setColors] = useState<FiltredData[] | null>(null)
    const [brands, setBrands] = useState<FiltredData[] | null>(null)
    const [productTypes, setProductTypes] = useState<FiltredData[] | null>(null)
    const [stockCounts, setStockCounts] = useState<StockCount[] | null>(null)
    const [filtersData,setFiltersData] = useState<FilterGroup[] | null>(null)
    const [priceRange, setPriceRange] = useState<PriceRange | null>(null)
    const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([priceMinParam, priceMaxParam])
   const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
  size: [],
  colors: [],
  brand: [],
  product_type: [],
  is_in_stock:[]
});

    const debouncePriceRange= useDebounce(selectedPriceRange, 400)

    

    

useEffect(() => {
  const fetchFilters = async () => {
    try {
      const [sizes, colors, brands, productTypes, priceRange,stockCounts ] = await Promise.all([
        fetchSizes(),
        fetchColors(),
        fetchBrands(),
        fetchProductType(),
        fetchPriceRange(),
        fetchStockCounts()
      ]);

      setSizes(sizes);
      setColors(colors);
      setBrands(brands);
      setProductTypes(productTypes);
      setPriceRange(priceRange);
      setStockCounts(stockCounts)

      setFiltersData([
        { key: "size",title:"Size", item: sizes },
        { key: "colors",title:"Color", item: colors },
        { key: "brand",title:"Brand", item: brands },
        { key: "product_type",title:"Tip Produs", item: productTypes },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  fetchFilters();
}, []);

useEffect(() => {
  const newPage = Number(searchParams.get("page")) || 1;
  const newSort = searchParams.get("sort") || "title:asc";
  const newMinPrice = Number(searchParams.get("minPrice")) || priceRange?.minPrice || 0;
  const newMaxPrice = Number(searchParams.get("maxPrice")) || priceRange?.maxPrice || 10000;
  const syncFiltersFromURL = () => {
    const getParam = (key: string) => searchParams.getAll(key);
    setSelectedFilters({
      size: getParam("size"),
      colors: getParam("colors"),
      brand: getParam("brand"),
      product_type: getParam("product_type"),
      is_in_stock:getParam("is_in_stock")
    });
  };


  setCurrentPage(newPage);
  setCurrentSort(newSort);
  setSelectedPriceRange([newMinPrice, newMaxPrice])
  syncFiltersFromURL()
}, [searchParams]);


  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  useEffect(() => {
    fetchProductsData(currentPage, pageSize,
        {
            minPrice:selectedPriceRange[0],
            maxPrice: selectedPriceRange[1]
        },
         selectedFilters,currentSort)
      .then((data) => {
        setProductsData(data);
        setProducts(data.products);
      })
      .catch(console.error);
  }, [currentPage, currentSort, debouncePriceRange]);

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

 const handlePriceChange = (range: [number, number]) => {
    setSelectedPriceRange(range);
    setSearchParams((params) => {
      params.set("minPrice", range[0].toString());
      params.set("maxPrice", range[1].toString());
      params.set("page", "1"); 
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

const handleFilterParamChange = (key: string, value: string) => {
  setSearchParams((prev) => {
    const current = new Set(prev.getAll(key));
    current.has(value) ? current.delete(value) : current.add(value);
    prev.delete(key);
    current.forEach((val) => prev.append(key, val));
    prev.set("page", "1");
    return prev;
  });
};

  return (
    <section>
        <PaddingContainer>
            <div className="flex">
            <div >
                <FilterSideBar 
                categories={categories}
                isFiltersOpen={isFiltersOpen}
                filtersData={filtersData}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                selectedPriceRange={selectedPriceRange}
                onFilterChange={handleFilterParamChange}
                stockCounts={stockCounts}
                />
            </div>

            <div>
                <div className="flex flex-col md:flex-row  md:items-center gap-2 md:gap-6 ">
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
                <ProductGrid products = {products}/>
                <PaginationBtns productsData={productsData} currentPage={currentPage} handlePageChange={handlePageChange}/>

            </div>
            </div>
        </PaddingContainer>
    </section>
  )
}

export default ShopSection