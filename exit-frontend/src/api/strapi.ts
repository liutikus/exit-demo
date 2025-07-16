export const BaseURL = import.meta.env.VITE_API_URL;

export const fetchCategories = async () => {
  const res = await fetch(`${BaseURL}/api/categories?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchProducts = async (currentPage : number, pageSize : number ) => {
  const res = await fetch(`${BaseURL}/api/products?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&populate=*`);
  const data = await res.json();
  return data.data;
 
};

export const fetchProductsData = async (
  currentPage : number,
  pageSize : number,
  sort?:string,
) => {
  const url = new URL(`${BaseURL}/api/products`);

  url.searchParams.append("pagination[page]", currentPage.toString());
  url.searchParams.append("pagination[pageSize]", pageSize.toString());
  url.searchParams.append("populate[mainImage]", "true");
  url.searchParams.append("populate[colors]", "true");


  if(sort){
    url.searchParams.append("sort", sort)
  }
  const res = await fetch(url.toString()) 
  
if (!res.ok) {
  const error = await res.text();
  console.error("Error response:", error);
  throw new Error(`HTTP ${res.status}: ${error}`);
}
  const data = await res.json();
  return{
    products:data.data,
    metaPagination: data.meta.pagination
  }
 
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


export const fetchGadgetType = async () => {
  const res = await fetch(`${BaseURL}/api/gadget-types?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchBrands = async () => {
  const res = await fetch(`${BaseURL}/api/brands?populate=*`);
  const data = await res.json();
  return data.data;
};