import IPhoneIcon from "../../assets/category-icons/iphone-icon.svg?react"
import LaptopIcon from "../../assets/category-icons/laptop-icon.svg?react"
import AccesoriesIcon from "../../assets/category-icons/accesories-icon.svg?react"
import EntertainmentIcon from "../../assets/category-icons/entertainment-icon.svg?react"
import WatchIcon from "../../assets/category-icons/watch-icon.svg?react"
import { useEffect, useState } from "react"
import type { Category, CategoryProductCount } from "../../types/types"
import { fetchCategoryProductsCount } from "../../api/strapi"

type CategoryCardProps = {
  slug: string
  title: string
  subCategories: Category[]
  categoryId: number
}

const CategoryCard = ({ slug, categoryId, title, subCategories }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [productCount, setProductCount] = useState<CategoryProductCount | null>(null)

  useEffect(() => {
    fetchCategoryProductsCount(categoryId)
      .then(setProductCount)
      .catch(console.error)
  }, [categoryId])

  const getSubCategoriesCount = (subCategoryId: number): number => {
    const found = productCount?.breakdown.find(({ id }) =>{
       id === subCategoryId
      console.log(id===subCategoryId)
      })
    console.log(productCount?.breakdown)
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

  return (
    <div className="border-1 p-2 border-[rgba(var(--color-gray-rgb),0.26)] rounded-xl my-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-3 items-center">
          {getCategoryIcon(slug)}
          <h3 className="font-bold w-max">{title}</h3>
          <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold">
            {productCount?.total ?? 0}
          </p>
        </div>

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
        {subCategories.map(({ title, id }, index) => (
          <div key={index} className="py-2 opacity-70 flex gap-2 items-center">
            <button className="text-sm cursor-pointer">{title}</button>
            <p className="p-1 rounded-md text-xs px-2 border-1 border-[var(--color-black)] font-bold opacity-50">
              {getSubCategoriesCount(id)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCard
