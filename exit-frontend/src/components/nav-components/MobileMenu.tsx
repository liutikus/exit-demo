import { Link, useNavigate } from "react-router"
import AppleLogo from "../../assets/icons/apple-auth.svg?react"
import ExitLogo from "../../assets/icons/exit-logo.svg?react"
import { useEffect, useState } from "react"
import { fetchCategories } from "../../api/strapi"
import type { Category } from "../../types/types"
import { allowedCategories, cartPath } from "../../data/data"
import CategoryCard from "../shop-page-components/CategoryCard"
import TradeIcon from "../../assets/icons/trade-icon.svg?react"
import CartIcon from "../../assets/icons/cart-icon.svg?react"
import SearchIcon from "../../assets/icons/search-icon.svg?react"
import { useCart } from "../../hooks/useCart"

type MobileMenuProps = {
    isMenuOpen:boolean,
    setIsMenuOpen: (value: boolean)=>void
    searchValue:string
    setSearchValue:(value:string)=>void
}

const MobileMenu = ({isMenuOpen, setIsMenuOpen, searchValue,setSearchValue } : MobileMenuProps) => {

    const {totalItems, total} = useCart()

        const [categories, setCategories] = useState<Category[] | null>(null)
        const navigate = useNavigate();
        const [isOpen, setIsOpen] = useState(false)
    

      useEffect(()=>{
        fetchCategories()
            .then(data=>setCategories(data.filter((category : Category)=> allowedCategories.includes(category.slug))))
            .catch(console.error)
      },[])

   const handleCategoryChange = (slugs: string[]) => {
    const params = new URLSearchParams();
    params.set("category", slugs.join(","));
    params.set("page", "1");

    navigate(`/shop?${params.toString()}`);
    setIsMenuOpen(false); 
  };

  return (
    <>
 <div
  className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] max-w-sm 
  bg-white dark:bg-black z-[60]  dark:text-white
  transform transition-transform duration-300   overflow-y-auto no-scrollbar
  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <div className="p-6 flex flex-col gap-6">
    <button
      onClick={() => setIsMenuOpen(false)}
      className="self-end text-[var(--color-black)] cursor-pointer dark:text-white"
    >
      ✕
    </button>

    <div className="flex items-center dark:text-white text-[var(--color-black)]">
      <div>
        <Link to={"/"}>
          <ExitLogo className="h-[32px] w-auto" />
        </Link>
      </div>
      <div className="block border-l-2 border-[rgba(var(--color-gray-rgb),0.51)] w-0.5 h-12 mx-6 rounded-full" />
      <div className="block">
        <AppleLogo className="h-[32px] w-auto" />
      </div>
    </div>
<div className="flex flex-col gap-y-4">
    <div className="flex items-center">
                <input
                 type="text"
                 value={searchValue}
                 onChange={(e)=>setSearchValue(e.target.value)}
                  placeholder="Căutați"
                  className="py-[16px] outline-none dark:placeholder-[var(--color-gray)] w-full px-[13px] bg-[var(--color-light-gray)] dark:bg-[rgba(var(--color-gray-rgb),0.26)] rounded-l-xl border-1 border-[rgba(var(--color-gray-rgb),0.46)]"
                  />
                    <Link
                to={`/shop?search=${searchValue}`}
                >
                <button className="cursor-pointer text-white rounded-r-xl py-[10px] px-2  bg-[var(--color-accent)]">
                    <SearchIcon className="w-auto h-10"/>
                </button>
                </Link>
            </div>
     <div className="flex items-baseline-last justify-between dark:text-white text-[var(--color-black)]">
              <div className=" mr-4 relative">
                <TradeIcon className="h-[26px] w-auto"/>
                <p className="absolute -top-2 -right-2 w-5 h-5 text-sm flex items-center justify-center rounded-full text-white bg-[var(--color-accent)]">
                  0
                </p>

              </div>
                <Link
                to={cartPath}
                >
              <div className="flex px-4 items-baseline-last">
                <div className="relative">
                <CartIcon className="h-[26px] w-auto"/>
 <p className="absolute -top-2 -right-2 w-5 h-5 text-sm flex items-center justify-center rounded-full text-white bg-[var(--color-accent)]">
  {totalItems}
</p>
                </div>
                <div className="pl-4">
                  <h3 className="block text-sm">Subtotal</h3>
                  <h2 className="font-bold">{total.toLocaleString()} MDL</h2>
                  </div>
              </div>
                </Link>
            </div>
    <Link
    to={"/"}
    >
    <h3 className="text-lg font-bold">Home</h3>
    </Link>
    <div>
        <div className="flex items-baseline justify-between">
        <Link
        to={"/shop"}
        >
        <button className="text-lg font-bold">Shop</button>
        </Link>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`border-1 rounded-md text-xl w-[35px] pb-[5px] transition-all ease-in-out duration-300 cursor-pointer font-bold border-[var(--color-accent)]
              hover:bg-[var(--color-accent)]`}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div
        className={`overflow-hidden py-1 transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
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
            
        </div>
    </div>
     <Link
    to={"/trade-in"}
    >
    <h3 className="text-lg font-bold">Trade In</h3>
    </Link>
     <Link
    to={"/e-bronique"}
    >
    <h3 className="text-lg font-bold">E-Bronique</h3>
    </Link>
     <Link
    to={"/about"}
    >
    <h3 className="text-lg font-bold">Despre noi</h3>
    </Link>

</div>
  </div>
</div>

{isMenuOpen && (
<div
  className="fixed inset-0 bg-white/40 backdrop-blur-md z-50 transition-opacity duration-300"
  onClick={() => setIsMenuOpen(false)}
></div>
)}
</>
  )
}

export default MobileMenu
