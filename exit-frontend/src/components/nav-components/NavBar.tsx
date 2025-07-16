import ExitLogo from "../../assets/icons/exit-logo.svg?react"
import AppleLogo from "../../assets/icons/apple-auth.svg?react"
import PaddingContainer from "../PaddingContainer"
import LocationIcon from "../../assets/icons/location-icon.svg?react"
import TradeIcon from "../../assets/icons/trade-icon.svg?react"
import CartIcon from "../../assets/icons/cart-icon.svg?react"
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react"
import SubNav from "./SubNav"
import { Link } from "react-router"

type NavProps = {
  isDark: boolean
}

const NavBar = ({isDark}: NavProps) => {



  return (
    <nav className={isDark ? "dark" : ""}>
      <div className= "bg-white dark:bg-[var(--color-black)]">
      <div className="border-b-1 border-[rgba(var(--color-gray-rgb),0.17)] pb-4">
      <PaddingContainer>
        <div className="flex justify-between items-center pt-5">
          <div className="cursor-pointer">
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
            <div className="dark:bg-white bg-[var(--color-black)] px-[14px] my-[5px] py-[2px] rounded-full"></div>
          </div>
            <div className="flex items-center dark:text-white text-[var(--color-black)]">
               <div>
                <Link to={"/"}>
                <ExitLogo className="h-[32px] w-auto"/>
                </Link>
               </div>
               <div className="border-l-2 border-[rgba(var(--color-gray-rgb),0.51)] w-0.5 h-12 mx-6 rounded-full"/>
               <div>
                <AppleLogo className="h-[32px] w-auto"/>
               </div>
            </div>
            <div className="w-[50%] px-2 hidden md:block">
                <input
                 type="text"
                  placeholder="Căutați"
                  className="py-[16px] dark:placeholder-[var(--color-gray)] w-full px-[13px] bg-[var(--color-light-gray)] dark:bg-[rgba(var(--color-gray-rgb),0.26)] rounded-xl border-1 border-[rgba(var(--color-gray-rgb),0.46)]"

                  />
            </div>
            <div className="hidden lg:flex items-center dark:text-white text-[var(--color-black)] dark:bg-[rgba(var(--color-gray-rgb),0.26)] bg-[var(--color-light-gray)] p-[8px] rounded-xl">
              <div className="text-[var(--color-accent)] pr-[7px]">
                <LocationIcon className="h-[20px] w-auto"/>
              </div>
              <div className="px-2">
                <h2>Unde ne găsiți</h2>
                <h2 className="font-bold">Atrium, et.1</h2>
              </div>
                <div className="pl-2">
                  <ArrowIcon/>
                </div>
            </div>
            <div className="flex items-baseline-last justify-between dark:text-white text-[var(--color-black)]">
              <div className="mr-4 relative">
                <TradeIcon className="h-[26px] w-auto"/>
                <p className="absolute -top-2 -right-2 w-5 h-5 text-sm flex items-center justify-center rounded-full text-white bg-[var(--color-accent)]">
  0
</p>

              </div>
              <div className="flex px-4 items-baseline-last">
                <div className="relative">
                <CartIcon className="h-[26px] w-auto"/>
 <p className="absolute -top-2 -right-2 w-5 h-5 text-sm flex items-center justify-center rounded-full text-white bg-[var(--color-accent)]">
  0
</p>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Subtotal</h3>
                  <h2 className="font-bold">0.00 MDL</h2>
                  </div>
              </div>
            </div>
            
        </div>

      </PaddingContainer>

      </div>
      <SubNav/>

      </div>
    </nav>
  )
}

export default NavBar









