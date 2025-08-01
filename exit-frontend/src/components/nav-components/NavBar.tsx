import ExitLogo from "../../assets/icons/exit-logo.svg?react"
import AppleLogo from "../../assets/icons/apple-auth.svg?react"
import PaddingContainer from "../PaddingContainer"
import LocationIcon from "../../assets/icons/location-icon.svg?react"
import TradeIcon from "../../assets/icons/trade-icon.svg?react"
import CartIcon from "../../assets/icons/cart-icon.svg?react"
import SubNav from "./SubNav"
import { Link } from "react-router"
import { useCart } from "../../hooks/useCart"
import { cartPath } from "../../data/data"
import PaddingTop from "../PaddingTop"
import SearchResult from "./SearchResult"
import { fetchSearchResults } from "../../api/strapi"
import { useEffect, useState } from "react"
import { useDebounce } from "../../data/useDebounce"
import type { Product } from "../../types/types"
import MobileMenu from "./MobileMenu"

type NavProps = {
  isDark: boolean
}

const NavBar = ({isDark}: NavProps) => {

const {totalItems, total} = useCart()

  const [searchValue, setSearchValue] = useState("");
  const [searchProducts, setSearchProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const debouncedSearchTerm = useDebounce(searchValue, 800);

    
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchProducts(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    let canceled = false;

    fetchSearchResults(debouncedSearchTerm)
      .then((results) => {
        if (!canceled) setSearchProducts(results);
      })
      .catch((err) => {
        if (!canceled) console.error(err.message);
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [debouncedSearchTerm]);

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10 // show if scrolling up or near top
      setVisible(isVisible)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <>
    <PaddingTop/>
    <nav 
      className={`
          fixed w-full top-0 z-50 transition-transform duration-500
          ${isDark ? "dark" : ""}
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      <div className= "bg-white dark:bg-[var(--color-black)]">
      <div className="border-b-1 border-[rgba(var(--color-gray-rgb),0.17)] pb-4">
      <PaddingContainer>
        <div className="flex justify-between items-center pt-5">
          <button 
          onClick={()=>setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer">
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
          </button>
            <div className="flex items-center dark:text-white text-[var(--color-black)]">
               <div>
                <Link to={"/"}>
                <ExitLogo className="h-[32px] w-auto"/>
                </Link>
               </div>
               <div className="hidden sm:block border-l-2 border-[rgba(var(--color-gray-rgb),0.51)] w-0.5 h-12 mx-6 rounded-full"/>
               <div className="hidden sm:block">
                <AppleLogo className="h-[32px] w-auto"/>
               </div>
            </div>
                 <div className="w-[50%] relative px-2 hidden md:block">
     <div >
                <input
                 type="text"
                 value={searchValue}
                 onChange={(e)=>setSearchValue(e.target.value)}
                  placeholder="Căutați"
                  className="py-[16px] outline-none dark:placeholder-[var(--color-gray)] w-full px-[13px] bg-[var(--color-light-gray)] dark:bg-[rgba(var(--color-gray-rgb),0.26)] rounded-xl border-1 border-[rgba(var(--color-gray-rgb),0.46)]"
                  />
            </div>
    </div>
            <div className="hidden lg:flex items-center dark:text-white text-[var(--color-black)] dark:bg-[rgba(var(--color-gray-rgb),0.26)] bg-[var(--color-light-gray)] p-[8px] rounded-xl">
              <div className="text-[var(--color-accent)] pr-[7px]">
                <LocationIcon className="h-[20px] w-auto"/>
              </div>
              <div className="px-2">
                <h2>Unde ne găsiți</h2>
                <h2 className="font-bold">Atrium, et.1</h2>
              </div>
            </div>
            <div className="flex items-baseline-last justify-between dark:text-white text-[var(--color-black)]">
              <div className="hidden mr-4 relative sm:block ">
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
                  <h3 className="hidden sm:block text-sm">Subtotal</h3>
                  <h2 className="font-bold">{total.toLocaleString()} MDL</h2>
                  </div>
              </div>
                </Link>
            </div>
            
        </div>
    
      </PaddingContainer>

      </div>
      <div className="hidden md:block">
            <SearchResult 
            products={searchProducts} 
            isOpen={searchProducts? true : false} 
            loading={loading}
            searchValue={searchValue}
            />

      </div>
            
      <SubNav/>

      </div>
    </nav>
    <div 
    className={`${isDark? "dark" :""}`}
    >
    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={(value)=>setIsMenuOpen(value)} searchValue={searchValue} setSearchValue={setSearchValue}/>

    </div>
    </>
  )
}

export default NavBar









