import IPhoneIcon from "../../assets/category-icons/iphone-icon.svg?react"
import LaptopIcon from "../../assets/category-icons/laptop-icon.svg?react"
import AccesoriesIcon from "../../assets/category-icons/accesories-icon.svg?react"
import EntertainmentIcon from "../../assets/category-icons/entertainment-icon.svg?react"
import WatchIcon from "../../assets/category-icons/watch-icon.svg?react"
import { useEffect, useState } from "react"
import type { Category, CategoryProductCount } from "../../types/types"
import { fetchCategoryProductsCount } from "../../api/strapi"
import { useSearchParams } from "react-router"

type CategoryCardProps = {
  categorySlug: string
  title: string
  subCategories: Category[]
  categoryId: number
    handleCategoryChange: (slug: string[]) => void

}

const CategoryCard = ({ categorySlug, categoryId,handleCategoryChange, title, subCategories }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [productCount, setProductCount] = useState<CategoryProductCount | null>(null)
  const [subCategoriesSlugs, setSubCategoriesSlugs] = useState([""])
 
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category") || ""
    

useEffect(() => {
  const slugs = subCategories.map(sub => sub.slug);
  setSubCategoriesSlugs(slugs);
}, [subCategories]);
 

  useEffect(() => {
    fetchCategoryProductsCount(categoryId)
      .then(setProductCount)
      .catch(console.error)
  }, [categoryId])

  const getSubCategoriesCount = (subCategorySlug: string): number => {
    const found = productCount?.breakdown.find(({ slug }) =>slug === subCategorySlug
      )
    return found?.productCount ?? 0
  }

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "cellphones-and-accessories":
        return <IPhoneIcon className="w-[18px] h-[18px]" />
      case "mac-book-and-computers":
        return <LaptopIcon className="w-[18px] h-[18px]" />
      case "entertainment":
        return <EntertainmentIcon className="w-[18px] h-[18px]" />
      case "accesories":
        return <AccesoriesIcon className="w-[18px] h-[18px]" />
      case "watch":
        return <WatchIcon className="w-[18px] h-[18px]" />
      default:
        return null
    }
  }

 console.log(subCategories)

  return (
    <div className="border-1 p-2 border-[rgba(var(--color-gray-rgb),0.26)] rounded-xl my-4">
      <div className="flex gap-4 justify-between items-center">
        <button
        onClick={()=>handleCategoryChange(subCategoriesSlugs)}
        className="flex gap-3 items-center cursor-pointer">
          {getCategoryIcon(categorySlug)}
          <h3 className="font-bold w-max">{title}</h3>
          <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold">
            {productCount?.total ?? 0}
          </p>
        </button>

        {subCategories.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`border-1 rounded-md text-xl w-[35px] pb-[5px] transition-all ease-in-out duration-300 cursor-pointer font-bold border-[var(--color-accent)]
              hover:bg-[var(--color-accent)]`}
          >
            {isOpen ? "-" : "+"}
          </button>
        )}
      </div>

      <div
        className={`overflow-hidden py-1 transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        {subCategories.map(({ title, slug }, index) => (
          <div key={index} className={`${category === slug ? "font-bold opacity-100" : "font-normal opacity-70"} py-2 flex gap-2 items-center`}>
            <button 
            onClick={()=>handleCategoryChange([slug])}
            className="text-sm cursor-pointer">{title}</button>
            <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold ">
              {getSubCategoriesCount(slug)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCard
