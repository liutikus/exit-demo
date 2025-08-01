import { populateValues } from "../data/data";
import type { PriceRange, SelectedFilters } from "../types/types";

export const BaseURL = import.meta.env.VITE_API_URL;

export const fetchCategories = async () => {
  const res = await fetch(`${BaseURL}/api/categories?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchProducts = async (currentPage : number, pageSize : number ) => {
  const url = new URL(`${BaseURL}/api/products?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`);
    url.searchParams.append("populate[subCategories]", "true"); 

  const res = await fetch(url.toString());
  const data = await res.json();
  return data.data;
 
};

export const fetchProductsData = async (
  currentPage: number,
  pageSize: number,
  priceRange: PriceRange,
  filters?: SelectedFilters,
  sort?: string,
  categorySlug?: string,
  search?: string   
) => {
  const url = new URL(`${BaseURL}/api/products`);

  url.searchParams.append("pagination[page]", currentPage.toString());
  url.searchParams.append("pagination[pageSize]", pageSize.toString());
  url.searchParams.append("populate[mainImage]", "true");
  url.searchParams.append("populate[colors]", "true");
  url.searchParams.append("populate[size]", "true");
  url.searchParams.append("populate[product_type]", "true");
  url.searchParams.append("populate[brand]", "true");
  url.searchParams.append("populate[categories]", "true");

  if (sort) {
    url.searchParams.append("sort", sort);
  }

  if (priceRange?.minPrice) {
    url.searchParams.append("filters[start_price][$gte]", priceRange.minPrice.toString());
  }

  if (priceRange?.maxPrice) {
    url.searchParams.append("filters[start_price][$lte]", priceRange.maxPrice.toString());
  }

  
  if (search) {
    url.searchParams.append("filters[title][$containsi]", search);
  }

  const relationFields = ["size", "colors", "brand", "product_type"];

  if (filters) {
    Object.entries(filters).forEach(([key, values]) => {
      if (!values || !Array.isArray(values)) return;

      if (relationFields.includes(key)) {
        values.forEach((val) => {
          if (val) {
            url.searchParams.append(`filters[${key}][slug][$in]`, val);
          }
        });
      }

      if (key === "is_in_stock") {
        values.forEach((val) => {
          if (val === "true" || val === "false") {
            url.searchParams.append(`filters[is_in_stock][$eq]`, val);
          }
        });
      }
    });
  }

  if (categorySlug) {
    const slugs = categorySlug.split(",");
    slugs.forEach((slug) => {
      url.searchParams.append("filters[categories][slug][$in]", slug);
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    const error = await res.text();
    console.error("Error response:", error);
    throw new Error(`HTTP ${res.status}: ${error}`);
  }

  const data = await res.json();

  return {
    products: data.data,
    metaPagination: data.meta.pagination
  };
};




export const fetchMainHero = async () => {
  const res = await fetch(`${BaseURL}/api/main-page-hero?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchMainVideo = async () => {
  const res = await fetch(`${BaseURL}/api/main-page-video?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchTradeInVideo = async () => {
  const res = await fetch(`${BaseURL}/api/trade-in-page-video?populate=*`);
  const data = await res.json();
  return data.data;
};

export async function fetchBestSellingProducts() {
  const url = new URL(`${BaseURL}/api/best-selling`);

  url.searchParams.append("populate", "products.mainImage");
  url.searchParams.append("populate", "products.colors");

  const res = await fetch(url.toString());
  const json = await res.json();


  const products = json.data?.products || [];
  return products;
}

export async function fetchTopProducts() {
  const url = new URL(`${BaseURL}/api/top-product`);

  url.searchParams.append("populate", "products.mainImage");
  url.searchParams.append("populate", "products.colors");

  const res = await fetch(url.toString());
  const json = await res.json();


  const products = json.data?.products || [];
  return products;
}

export const fetchShopHero = async () => {
  const res = await fetch(`${BaseURL}/api/shop-page-hero?populate=*`);
  const data = await res.json();
  return data.data;
};


export const fetchSizes = async () => {
  const res = await fetch(`${BaseURL}/api/sizes?populate=*`);
  const data = await res.json();
  return data.data;
};


export const fetchColors = async () => {
  const res = await fetch(`${BaseURL}/api/colors?populate=*`);
  const data = await res.json();
  return data.data;
};


export const fetchProductType = async () => {
  const res = await fetch(`${BaseURL}/api/product-types?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchBrands = async () => {
  const res = await fetch(`${BaseURL}/api/brands?populate=*`);
  const data = await res.json();
  return data.data;
};


export const fetchPriceRange = async () => {
  const res = await fetch(`${BaseURL}/api/products/price-range`);
  const data = await res.json();
  return data;
};

export const fetchCategoryProductsCount = async (categoryId:number) => {
  const res = await fetch(`${BaseURL}/api/categories/${categoryId}/product-count`);
  const data = await res.json();
  return data;
};

export const fetchStockCounts = async () => {
  const promises = ["true", "false"].map(async (val) => {
    const res = await fetch(`${BaseURL}/api/products?filters[is_in_stock][$eq]=${val}&pagination[pageSize]=1`);
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Fetch failed: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    return {
      is_in_stock: val === "true",
      count: data.meta.pagination.total
    };
  });

  const results = await Promise.all(promises);
  return results;
};

export const fetchProductById = async (id: string) => {
  const url = new URL(`${BaseURL}/api/products/${id}`);

  populateValues.forEach((val)=>{
    url.searchParams.append(`populate[${val}]`, "true");

  })
url.searchParams.append(`populate[product_details][populate][details_info]`, "*")

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}: ${res.status}`);
  }
  const data = await res.json();
  return data.data;
};

export const fetchProductVideo = async () => {
  const url = new URL(`${BaseURL}/api/product-page-video?populate=*`);




  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch product video: ${res.status}`);
  }
  const data = await res.json();
  return data.data;
};

export const fetchNewProductsByType = async (productTypeSlug?: string) => {
  const url = new URL(`${BaseURL}/api/products`);

  url.searchParams.append("pagination[page]", "1");
  url.searchParams.append("pagination[pageSize]", "3");

  if(productTypeSlug){

    url.searchParams.append("filters[product_type][slug][$eq]", productTypeSlug);
  }
  url.searchParams.append("filters[is_new][$eq]", "true");

url.searchParams.append(`populate[product_features][populate][description]`, "*")
url.searchParams.append(`populate[product_features][populate][icon]`, "true")



  populateValues.forEach((val)=>{
    url.searchParams.append(`populate[${val}]`, "true");

  })



  const res = await fetch(url.toString());

  if (!res.ok) {
    const error = await res.text();
    console.error("Error response:", error);
    throw new Error(`HTTP ${res.status}: ${error}`);
  }

  const data = await res.json();
  return data.data;
};

export const fetchProductsBySpecial = async (specialOffer:string) =>{
  const url = new URL(`${BaseURL}/api/products`);
     url.searchParams.append("pagination[page]", "1");
  url.searchParams.append("pagination[pageSize]", "10");
   url.searchParams.append(`filters[${specialOffer}][$eq]`, "true");

   populateValues.forEach((val)=>{
    url.searchParams.append(`populate[${val}]`, "true");

  })

  const res = await fetch(url.toString())
  if (!res.ok) {
  const error = await res.text();
  console.error("Error response:", error);
  throw new Error(`HTTP ${res.status}: ${error}`);
}
  const data = await res.json()
  return data.data;
}

export const fetchSearchResults = async(searchValue:string)=>{
  const url = new URL(`${BaseURL}/api/products/?filters[title][$containsi]=${searchValue}&pagination[limit]=5`)
    url.searchParams.append(`populate[mainImage]`, "true");
    url.searchParams.append(`populate[product_type]`, "true");



    const res = await fetch(url.toString())
  if (!res.ok) {
  const error = await res.text();
  console.error("Error response:", error);
  throw new Error(`HTTP ${res.status}: ${error}`);
}
  const data = await res.json()

  return data.data;
}