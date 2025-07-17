export type Category = {
    title: string,
    slug:string,
    id:number,
    subCategories:[Category]
}

export type Product = {
    title: string,
    mainImage:{
        url:string
    } ,
    is_on_sale:boolean,
    is_top_sold: boolean,
    is_unpacked:boolean,
    is_new: boolean,
    images:[{
        url:string
    }],
    category:{
        id:number,
        title:string,
    },
    id:number,
    discountPercentage:number | undefined,
    colors: [{
        hex_code: string,
        name:string
    }],
    start_price:number,
}

export type ProductsData = {
    products: Product[] | null,
    metaPagination: {
        total: number,
        page: number,
        pageSize: number,
        pageCount:number
    }
}

export type HeroData = {
    image: {
        url:string
    },
    title:string,
    sub_title:string | null
    highlighted_title: string | null
}

export type VideoData = {
    video: {
        url: string
    },
    title:string
}

export type FiltredData = {
    id:number,
    name:string,
    products:Product[],
    hex_code:string | undefined
    slug:string
}

export type FilterGroup = {
    key:string,
    title:string
    item:FiltredData[] 

}

export type PriceRange = {
    minPrice:number
    maxPrice:number
}

export type StockCount={
    is_in_stock: boolean,
    count:number
}

export type SelectedFilters = {
      size: string[];
  colors: string[];
  brand: string[];
  product_type: string[];
  is_in_stock:string[]
}